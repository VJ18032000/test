const Image=require('../models/image')


const create=(req,res)=>{
    console.log(req.files[0].filename)
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/uploads/image/' + req.files[i].filename)
    }
    const image1 = new Image({
        image: reqFiles,
        name:req.body.name
    });
    image1.save()
        .then(imag => {
            const resdata = {
                "status": "OK",
                "result": {
                    "inserted_id": `${imag.id}`,
                    "img":`${imag.image}`
                },
                "error": {}
            }
            res.json(resdata)
        })
        .catch(err => {
            const resdata = {
                "status": "OK",
                "message": "",
                "result": {},
                "errors": {
                    "errors": {
                        "message": `${err.message}`,
                        "type": `${err.name}`
                    }
                }
            }
            res.json(resdata)
        })

}

const get=(req,res)=>{
    Image.find()
    .then(img=>{
        res.send(img)
    })
}

module.exports={
    create,
    get
}