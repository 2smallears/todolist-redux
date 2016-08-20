import request from 'superagent';

export default store=>next=>action=>{
    request
        .get('/todolist')
        .end((err,res)=>{
            next({type:'GETTODOS',todos:res.body})
        })
}
