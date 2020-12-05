export const IdGenerate = async () => {
    return await Math.floor(Math.random() * 100) + Date.now()
}
export const DateTimeNow = async () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleString()
}
export const DateCustomized = () => {
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
}
export const MonthInFull = async () => {
    const monthsFull = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var currentdate = new Date();
    var monthNum = currentdate.getMonth()
    return monthsFull[monthNum]
}

