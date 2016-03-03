var db=require('./db.js');
var getElementByIndexElseRandom=function(array,index){ 
	if(index==null){  
		var i=Math.floor(Math.random()*array.length);
		var item=array[i];
	}
	else{ 
		var item=array[index];
	 }
	 return item;
}


//console.log(getElementByIndexElseRandom([1,2,3],0))
//console.log(getElementByIndexElseRandom([1,2,3]))


exports.getQuotesFromJSON=function(){ 
var q=require('/Users/farida_amr/Desktop/se-assignment-master/quotes.json');

return q;

}

exports.getQuoteFromJSON=function(index){ 
 var oneq=require('/Users/farida_amr/Desktop/se-assignment-master/quotes.json')
 if(index==null){ 
 var randnumber=Math.floor(Math.random()*oneq.length);
 return oneq[randnumber];
 }
 return oneq[index];
}
 

 function seed(cb){ 
 	if(db==null){
 		cb(true,false);
 		return true;

 	}
 	else{ 
 		 var oneq=require('/Users/farida_amr/Desktop/se-assignment-master/quotes.json')
 		 var i=0;
 		 while(i<oneq.length){ 
 		 	db[i]=(oneq[i]);
 		 	i++;

 		 }
 		 return false;
 	     cb(false,true);
 	}

 
 }

 function size(dbarray){ 
 	var i=0;
 	while(dbarray[i]!=null){
 	   i++; 
 	}
 	return i+1;
 }
exports.getQuotesFromDB=function(cb){ 
    var elm =getElementByIndexElseRandom(db);
    var i=Math.floor(Math.random()*size(db));
	
	

    if(db==null){ 
     cb(null,db);
    }
    else{ 
     cb(true,db);
    }
        return db;
}

exports.getQuoteFromDB=function(cb,index){ 
	 //var elm =getElementByIndexElseRandom(db,index);
	 var i=0;
	 if(index==null){ 
    i=Math.floor(Math.random()*size(db));}
    else{ 
    i=index;
    }
	
	

    if(item!=null){ 
     cb(null,db);
    }
    else{ 
      cb(true,db);
    }

      var item=db[i];
        return item;

}

 function cb(err,seeded){ 
    //var i=Math.floor(Math.random()*size(db));
	//var item=db[i];
	//return item;
 }





//console.log(getQuotesFromJSON());
//console.log(getQuoteFromJSON(5));
//console.log(getQuoteFromJSON());
console.log(seed(cb));
//console.log(getQuotesFromDB(cb));
//console.log(getQuoteFromDB(cb,1));






