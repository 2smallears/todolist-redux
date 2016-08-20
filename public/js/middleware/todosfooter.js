import request from 'superagent';

export default store=>next=>action=>{
    if(action.type === 'FILTER'){
        request
            .post('/todosfooter')
            .send({filtername:action.filtername})
            .end((err,res)=>{
                next({type:'GETTODOS',todos:res.body})
            })
    }else {
        next(action);
    }

}
