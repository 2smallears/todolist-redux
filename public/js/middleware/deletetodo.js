import request from 'superagent';

export default store=>next=>action=>{

    if(action.type === 'DELETE'){
        request
            .del('/deltodos')
            .send({id:action.id})
            .end((err,res)=>{
                next({type:'GETTODOS',todos:res.body});
            })

    } else {
        next(action);
    }
}
