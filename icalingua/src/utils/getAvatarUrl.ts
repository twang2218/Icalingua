let timestamp = new Date().getTime()

setInterval(() => {
    timestamp = new Date().getTime()
}, 1000 * 60)

export default (roomId: number): string => {
    return (roomId < 0)
        ? `https://p.qlogo.cn/gh/${-roomId}/${-roomId}/0?timestamp=${timestamp}`
        : `https://q1.qlogo.cn/g?b=qq&nk=${roomId}&s=640&timestamp=${timestamp}`
}
