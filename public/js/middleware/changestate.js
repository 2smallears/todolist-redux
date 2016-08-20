import request from 'superagent';

export default store=>next=>action=>{

    if(action.type === 'CHANGE'){
        request
            .post('/changestate')
            .send({index:action.index})
            .end((err,res)=>{
                next({type:'GETTODOS',todos:res.body});
            })

    } else {
        next(action);
    }
}
