const express = require ('express')
const router = express.Router()
const db = require('../model/db')

router.get("/", function(req,res){
res.render('main',{title:"영화 리뷰 사이트"})
})

router.post("/review/create",function(req,res){
    let movie_id = req.body.movie_id;
    let review = req.body.review;

    if(movie_id == '' || movie_id == 0){
        res.send({success:400})
    }else{
        db.reviews.create({
            movie_id:movie_id,
            review:review
        }).then(function(result){
            res.send({success:200})
        })
    }
})

router.get("/review/read",function(req,rep){
    let movie_id = req.query.movie_id;

    db.reviews.findAll({where:{movie_id}}).then(function(result){
        res.send({success:200, data:result})
    })
})

module.exports = router