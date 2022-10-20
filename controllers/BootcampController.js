exports.getBootcamps = (req, res) =>{
    res.status(200)
    .json({
        "success":true,
        "data": `Get all bootcamps`
    })
}

exports.getSingleBootcamp = (req, res)=>{
    res.status(200)
    .json({
        "success":true,
        "data": `Single Bootcamp ${req.params.id}`
    })
}

exports.createBootcamp = (req, res)=>{
    res.status(201)
    .json({
        "success":true,
        "data": "Create Bootcamp"
    })
}

exports.updateBootcamp = (req, res)=>{
    res.status(200)
    .json({
        "success":true,
        "data": `Update Bootcamp ${req.params.id}`
    })
}

exports.deleteBootcamp = (req, res)=>{
    res.status(200)
    .json({
        "success":true,
        "data": `Delete Bootcamp ${req.params.id}`
    })
}