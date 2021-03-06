const { MongoClient } = require("mongodb")
const ObjectId = require("mongodb").ObjectID

const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'wpu'

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

client.connect((error, client) => {
    if (error) {
        // return nya nanti saja
        console.log('Koneksi gagal!')
    }

    // pilih database
    const db = client.db(dbName)

    // // menambahkan 1 data ke collection mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: "dendi",
    //         email: "dendi@gmail.com"
    //     },
    //     (error, result) => {
    //         if(error) {
    //             // return nya nanti juga
    //             console.log('gagal menambahkan data!')
    //         }

    //         console.log(result)
    //     }
    // )

    // // menambahkan lebih dari 1 data
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: 'dendi',
    //             email: 'dendi@yahoo.com'
    //         },
    //         {
    //             nama: 'fajri',
    //             email: 'fajri@gmail.com'
    //         }
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log('data gagal ditambahkan!')
    //         }

    //         console.log(result)
    //     }
    // )

    // // menampilkan semua data yang ada di collection "mahasiswa"
    // console.log(
    //     db
    //     .collection('mahasiswa')
    //     .find()
    //     .toArray((error, result) => {
    //     console.log(result)
    // }))

    // // menampilkan data berdasarkan kriteria yang ada di collection "mahasiswa"
    // console.log(
    //         db
    //         .collection('mahasiswa')
    //         .find({ _id: ObjectId("6231cb1848c7d22d30d6b5c0") })
    //         .toArray((error, result) => {
    //         console.log(result)
    //     })
    // )

    // // mengubah data berdasarkan id
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //        _id: ObjectId("6231cb1848c7d22d30d6b5c0") 
    //     },
    //     {
    //         $set: {
    //             email: "fajri@yahoo.com"
    //         }
    //     },
    //     // (error, result) => {
    //     //     console.log(result)
    //     // }
    // )

    // updatePromise
    //     .then((result) => {
    //         console.log(result)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    // // mengubah data lebih dari 1 berdasarkan kriteria
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: "dendi"
    //     },
    //     {
    //         $set: {
    //             nama: "dendi doank"
    //         }
    //     }
    // )

    // // menghapus 1 data
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectId("6231cb1848c7d22d30d6b5c0")
    //     }
    // )
    // .then((result) => {
    //     console.log(result)
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

    // menghapus lebih dari 1 data
    db.collection('mahasiswa')
    .deleteMany(
        {
            nama: "dendi doank"
        }
    )
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
})