var mongoose=require('./config');//读取模式


var kittySchema = mongoose.Schema({
    name: String,
    age: Number
})

var Kitten = mongoose.model('Kitten', kittySchema)


var fluffy = new Kitten({ name: 'fluffy', age: 20 })

console.log(fluffy) // 583508738b57f80728df06c0,583509679e08470adc3a9e9b

//fluffy.save(function (err, fluffy) {
//	  if (err) return console.error(err);
//	  console.log(fluffy)
//});

Kitten.findById('58350399a7db47062037d3a7',function(err,people){
	people.age = 55
	console.log(people)
	people.save(function(err){
		if(err){
			console.log(err)
		}
	})
})

//Kitten.update({_id : '58350399a7db47062037d3a7'},{age : 21},function(err,peoples){
//	console.log(peoples)
//})
