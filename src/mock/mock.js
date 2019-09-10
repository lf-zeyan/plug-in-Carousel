import Mock from 'mockjs'

let data = [
    { id: 1, title: '我是swiper1' },
    { id: 2, title: '我是swiper2' },
    { id: 3, title: '我是swiper3' },
    { id: 4, title: '我是swiper4' },
    { id: 5, title: '我是swiper5' },
    { id: 6, title: '我是swiper6' },
    { id: 7, title: '我是swiper7' },
    { id: 8, title: '我是swiper8' },
    { id: 9, title: '我是swiper9' },
    { id: 10, title: '我是swiper10' }
]

Mock.mock('/getData','post', function (num) {
    var { num } = JSON.parse(num.body)
    let arr = data.slice(0, num)
    return {
        data: arr
    }
})