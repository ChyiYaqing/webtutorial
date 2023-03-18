const fetchPromise = fetch('https://blog.chyidl.com');

console.log(fetchPromise);

fetchPromise.then( response => {
    console.log(`已收到响应: ${response.status}`);
});

console.log("已发送请求...");