self.addEventListener
(
    type:'install', listener: evt=>
{
    console.log(evt);
}
);




self.addEventListener
(
    'activate', listener: evt=>
{
    console.log(evt);
}
)