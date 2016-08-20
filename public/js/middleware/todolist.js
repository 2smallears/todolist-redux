import request from 'superagent';

export default store=>next=>action=>{
    if(action.type === 'GETTODOS'){
        request
            .get('/todolist')
            .end((err,res)=>{
                next({type:'GETTODOS',todos:res.body})
            })
    }else {
        next(action);
    }

}
