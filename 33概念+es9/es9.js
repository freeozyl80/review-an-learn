// 展开运算符
const { first, second, ...others } = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 };

console.log(others);


// for await of

const justjavac = {
    [Symbol.asyncIterator]: () => {
      const items = [`j`, `u`, `s`, `t`, `j`, `a`, `v`, `a`, `c`];
      return {
        next: () => new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve({
                    done: items.length === 0,
                    value: items.shift()
                })
            }, 100)
        })
      }
    }
}
const fun  = async function fun() {
    for await (const item of justjavac) {
        console.log(item)
    }
}

fun();

// 正则表达式：

// 先行断言
console.log(/Roger(?= Waters)/.test('Roger Waters'))
console.log(/Roger(?! Waters)/.test('Roger is my dog'))
// 后行断言
console.log(/(?<=Roger) Waters/.test('Roger is my dog and Roger 地方 Waters is a famous musician'))
console.log(/(?<!Roger) Waters/.test('Pink Waters is my dog'))


//unicode 转义：
console.log('--------分割线-----------');
console.log(/^\p{Lowercase}$/u.test('h'));

// 捕获租
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const result = re.exec('2015-01-02')
console.log(result);