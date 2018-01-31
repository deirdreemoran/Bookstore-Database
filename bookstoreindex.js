var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.use(express.static('public'));
var session = require('express-session');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret:'SuperSecretPassword', saveUninitialized: true, resave: true}));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 5642);



app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS `bs_employee`", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE bs_employee("+
    "employeeID INT PRIMARY KEY AUTO_INCREMENT,"+
	"firstName VARCHAR(255) NOT NULL,"+
	"lastName VARCHAR(255) NOT NULL,"+
	"storeID INT,"+
    "position VARCHAR(255) NOT NULL)";
    mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('/',context);
    })
  });
});



app.get('/',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM `bs_employee`', function(err, rows, fields){
     if(err){
         next(err);
         return;
     }
    // context.bs_employee =    rows;
     res.render('all', context);
});
});

app.get('/employees',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM `bs_employee`', function(err, rows, fields){
     if(err){
         next(err);
         return;
     }
     context.bs_employee =    rows;
     res.render('all', context);
});
});

/***************************************************/
/***************************************************/
/***************************************************/
/***************************************************/

app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS `bs_customer`", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE bs_customer("+
    "customerID INT PRIMARY KEY AUTO_INCREMENT,"+
	"firstName VARCHAR(255) NOT NULL,"+
	"lastName VARCHAR(255) NOT NULL,"+
	"paymentMethod VARCHAR(255) NOT NULL)";
	mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('/',context);
    })
  });
});



app.get('/customers',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM `bs_customer`', function(err, rows, fields){
     if(err){
         next(err);
         return;
     }
     context.bs_customer = rows;
     res.render('all', context);
});
});



/***************************************************/
/***************************************************/
/***************************************************/
/***************************************************/
/***************************************************/

app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS `bs_book`", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE bs_book("+
    "bookID INT PRIMARY KEY AUTO_INCREMENT,"+
	"datePublished VARCHAR(255) NOT NULL,"+
	"title VARCHAR(255) NOT NULL,"+
	"authorFname VARCHAR(255) NOT NULL)"+
	"authorLname VARCHAR(255) NOT NULL)"+
    "price DECIMAL(19,4) NOT NULL))";
	mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('/',context);
    })
  });
});



app.get('/books',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM `bs_book`', function(err, rows, fields){
     if(err){
         next(err);
         return;
     }
     context.bs_book = rows;
     res.render('all', context);//will go to customer handlebar
});
});
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/***************************************************/

/***************************************************/
/***************************************************/
app.get('/tran',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM `bs_tran`', function(err, rows, fields){
     if(err){
         next(err);
         return;
     }
     context.bs_tran = rows;
     res.render('all', context);//will go to customer handlebar
});
});


/***************************************************/
/***************************************************/
/***************************************************/
app.get('/tranD',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM `bs_tranD`', function(err, rows, fields){
     if(err){
         next(err);
         return;
     }
     context.bs_tranD = rows;
     res.render('all', context);//will go to customer handlebar
});
});


/***************************************************/

app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS `bs_store`", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE bs_store("+
    "sID INT PRIMARY KEY AUTO_INCREMENT,"+
	"address VARCHAR(255) NOT NULL,"+
	"city VARCHAR(255) NOT NULL,"+
	"state VARCHAR(255) NOT NULL)"+
	"zipcode VARCHAR(255) NOT NULL)"+
    "country VARCHAR(255) NOT NULL))";
	mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('/',context);
    })
  });
});



app.get('/stores',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM `bs_store`', function(err, rows, fields){
     if(err){
         next(err);
         return;
     }
     context.bs_store = rows;
     res.render('all', context);//will go to customer handlebar
});
});
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/***************************************************/
/*******************company********************************/
/***************************************************/
/***************************************************/

app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS `bs_company`", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE bs_company("+
    "companyID INT(11) PRIMARY KEY AUTO_INCREMENT,"+
    "companyName VARCHAR(255) NOT NULL,"+
	"address VARCHAR(255) NOT NULL,"+
	"city VARCHAR(255) NOT NULL,"+
	"state VARCHAR(255) NOT NULL)"+
	"zipcode VARCHAR(255) NOT NULL)"+
    "country VARCHAR(255) NOT NULL))";
	mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('/',context);
    })
  });
});



app.get('/companies',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM `bs_company`', function(err, rows, fields){
     if(err){
         next(err);
         return;
     }
     context.bs_company = rows;
     res.render('all', context);
});
});
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/************************PUBLISHER***************************/
/***************************************************/
/***************************************************/
/***************************************************/
app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS `bs_pub`", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE bs_pub("+
    "publisherID INT PRIMARY KEY AUTO_INCREMENT,"+
    "publisherName VARCHAR(255) NOT NULL,"+
	"address VARCHAR(255) NOT NULL,"+
	"city VARCHAR(255) NOT NULL,"+
	"state VARCHAR(255) NOT NULL)"+
	"zipcode VARCHAR(255) NOT NULL)"+
    "country VARCHAR(255) NOT NULL))";
	mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('/',context);
    })
  });
});


app.get('/publishers',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM `bs_pub`', function(err, rows, fields){
     if(err){
         next(err);
         return;
     }
     context.bs_pub = rows;
     res.render('all', context);//will go to customer handlebar
});
});
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/***************************************************/
/*********/





app.post('/',function(req,res){
  var context = {};
   if(req.body['Add Employee'] && (req.body.firstName != "")){
       mysql.pool.query("INSERT INTO bs_employee (`firstName`,`lastName`,`storeID`,`position`) VALUES (?,?,?,?)", [req.body.firstName,req.body.lastName,req.body.storeID,req.body.position], function(err, result){
           if(err){
               next(err);
               return;
           }
        });
   }

   if(req.body['Delete']){
       mysql.pool.query("DELETE FROM bs_employee WHERE employeeID = ?", [req.body.employeeID], function(err, result){
           if(err){
               next(err);
               return;
           }
       });
   }

   mysql.pool.query('SELECT * FROM bs_employee', function(err, rows, fields){
   		if(err){
      	 next(err);
         return;
   }
   context.bs_employee = rows;
   res.render('bs_employee',context);
   });

});

app.get('/update',function(req,res,next){
	console.log(req.query.reps);
var context = {};
mysql.pool.query("SELECT * FROM bs_employee WHERE employeeID=?", [req.query.employeeID], function(err, result){
    if(err){
      next(err);
      return;
    }

      var curVals = result[0];
     // console.log(curVals);
      mysql.pool.query("UPDATE bs_employee SET firstName=?, lastName=?, storeID=?, position=? WHERE employeeID=? ",
        [req.query.firstName || curVals.firstName, req.query.lastName || curVals.lastName, req.query.storeID || curVals.storeID, req.query.position || curVals.position, req.query.employeeID],
        function(err, result){
        if(err){
          next(err);
          return;
        }
        	console.log(req.query.employeeID);

        context.firstName = req.query.firstName;
                context.lastName = req.query.lastName;
        context.storeID = req.query.storeID;
        context.position = req.query.position;
		context.employeeID = req.query.employeeID;
        res.render('update',context);
      });

});
});

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

app.post('/customers',function(req,res){
  var context = {};
 if(req.body['Add Customer'] && (req.body.firstName != "")){
          mysql.pool.query("INSERT INTO bs_customer (`firstName`,`lastName`,`paymentMethod`) VALUES (?,?,?)", [req.body.firstName,req.body.lastName,req.body.paymentMethod], function(err, result){
              if(err){
                  next(err);
                  return;
              }
           });
   }
   if(req.body['Delete']){
          mysql.pool.query("DELETE FROM bs_customer WHERE customerID = ?", [req.body.customerID], function(err, result){
              if(err){
                  next(err);
                  return;
              }
          });
      }
if(req.body['Edit']){
	var context = {};
	mysql.pool.query("SELECT * FROM bs_customer WHERE customerID=?", [req.query.customerID], function(err, result){
	    if(err){
	      next(err);
	      return;
	    }
	});

 	context.firstName = req.query.firstName;
 	context.lastName = req.query.lastName;
 	context.paymentMethod = req.query.paymentMethod;
 	context.customerID = req.query.customerID;
}
   mysql.pool.query('SELECT * FROM bs_customer', function(err, rows, fields){
   if(err){
       next(err);
       return;
   }
   context.bs_customer = rows;
   res.render('message',context);
   });
});



app.get('/updateCustomer',function(req,res,next){
	console.log("OASDFDSFSADFASDF");
var context = {};
mysql.pool.query("SELECT * FROM bs_customer WHERE customerID=?", [req.query.employeeID], function(err, result){
    if(err){
      next(err);
      return;
    }

      var curVals = result[0];
     // console.log(curVals);
      mysql.pool.query("UPDATE bs_customer SET firstName=?, lastName=?, paymentMethod=? WHERE customerID=? ", [req.query.firstName || curVals.firstName, req.query.lastName || curVals.lastName, req.query.paymentMethod || curVals.paymentMethod, req.query.customerID],
        function(err, result){
        if(err){
          next(err);
          return;
        }
        	console.log(req.query.customerID);

        context.firstName = req.query.firstName;
                context.lastName = req.query.lastName;
        context.customerID = req.query.customerID;
        context.paymentMethod = req.query.paymentMethod;
        res.render('updateCustomer',context);
      });

});
});


/////////////////////
/////////////////////]/
//////////////////////
/////EPMLOYEES///////
////////////////////////



app.post('/employees',function(req,res){
  var context = {};

 if(req.body['Add Employee'] && (req.body.firstName != "")){
          mysql.pool.query("INSERT INTO bs_employee (`firstName`,`lastName`,`storeID`,`position`) VALUES (?,?,?,?)", [req.body.firstName,req.body.lastName,req.body.storeID,req.body.position], function(err, result){
              if(err){
                  next(err);
                  return;
              }
           });
   }
   if(req.body['Delete']){
          mysql.pool.query("DELETE FROM bs_employee WHERE employeeID = ?", [req.body.employeeID], function(err, result){
              if(err){
                  next(err);
                  return;
              }
          });
      }
if(req.body['Edit']){
	var context = {};
	mysql.pool.query("SELECT * FROM bs_employee WHERE employeeID=?", [req.query.employeeID], function(err, result){
	    if(err){
	      next(err);
	      return;
	    }
	});

 	context.firstName = req.query.firstName;
 	context.lastName = req.query.lastName;
 	context.storeID = req.query.storeID;
 	context.position = req.query.position;
 	context.employeeID = req.query.employeeID;
}
   mysql.pool.query('SELECT * FROM bs_employee', function(err, rows, fields){
   if(err){
       next(err);
       return;
   }
   context.bs_employee = rows;
   res.render('message2',context);
   });
});


app.get('/updateEmployee',function(req,res,next){
var context = {};
mysql.pool.query("SELECT * FROM bs_employee WHERE employeeID=?", [req.query.employeeID], function(err, result){
    if(err){
      next(err);
      return;
    }

      var curVals = result[0];
     // console.log(curVals);
      mysql.pool.query("UPDATE bs_employee SET firstName=?, lastName=?, storeID=?, position=? WHERE employeeID=? ",
        [req.query.firstName || curVals.firstName, req.query.lastName || curVals.lastName, req.query.storeID || curVals.storeID, req.query.position || curVals.position, req.query.employeeID],
        function(err, result){
        if(err){
          next(err);
          return;
        }
        	console.log(req.query.employeeID);

        context.firstName = req.query.firstName;
        context.lastName = req.query.lastName;
        context.storeID = req.query.storeID;
        context.position = req.query.position;
        context.employeeID = req.query.employeeID;
        res.render('updateEmployee',context);
      });

});
});


/////////////////////
/////////////////////]/
//////////////////////
/////STORES///////
////////////////////////

app.post('/stores',function(req,res){
  var context = {};

 if(req.body['Add Store'] && (req.body.address != "")){
          mysql.pool.query("INSERT INTO bs_store (`address`,`city`,`state`,`zipcode`,`country`) VALUES (?,?,?,?,?)", [req.body.address,req.body.city,req.body.state,req.body.zipcode,req.body.country], function(err, result){
              if(err){
                  next(err);
                  return;
              }
           });
   }
   if(req.body['Delete']){
          mysql.pool.query("DELETE FROM bs_store WHERE sID = ?", [req.body.sID], function(err, result){
              if(err){
                  next(err);
                  return;
              }
          });
      }

if(req.body['Edit']){
var context = {};
mysql.pool.query('SELECT * FROM bs_store WHERE sID=?', [req.query.sID], function(err, result){
    if(err){
      next(err);
      return;
    }


});
 context.address = req.query.address;
  context.city = req.query.city;
 context.state = req.query.state;
 context.zipcode = req.query.zipcode;
 context.country = req.query.country;
 context.sID = req.query.sID;

}
   mysql.pool.query('SELECT * FROM bs_store', function(err, rows, fields){
   if(err){
       next(err);
       return;
   }
   context.bs_store = rows;
   res.render('message3',context);
   });
});



app.get('/updateStore',function(req,res,next){
var context = {};
mysql.pool.query("SELECT * FROM bs_store WHERE sID=?", [req.query.sID], function(err, result){
    if(err){
      next(err);
      return;
    }
      var curVals = result[0];
     // console.log(curVals);
      mysql.pool.query("UPDATE bs_store SET address=?, city=?, state=?, zipcode=?, country=? WHERE sID=? ",
        [req.query.address || curVals.address, req.query.city || curVals.city, req.query.state || curVals.state, req.query.zipcode || curVals.zipcode, req.query.country || curVals.country, req.query.sID],
        function(err, result){
        if(err){
          next(err);
          return;
        }
        context.address = req.query.address;
        context.city = req.query.city;
        context.state = req.query.state;
        context.zipcode = req.query.zipcode;
        context.country = req.query.country;
		context.sID = req.query.sID;
        res.render('updateStore',context);
      });

});
});



/////////////////////
/////////////////////]/
//////////////////////
/////BOOKS///////
////////////////////////



app.post('/books',function(req,res){
  var context = {};

 if(req.body['Add Book'] && (req.body.title != "")){
          mysql.pool.query("INSERT INTO bs_book (`datePublished`,`title`,`authorFname`,`authorLname`,`price`) VALUES (?,?,?,?,?)", [req.body.datePublished,req.body.title,req.body.authorFname,req.body.authorLname,req.body.price], function(err, result){
              if(err){
                  next(err);
                  return;
              }
           });
   }
   if(req.body['Delete']){
          mysql.pool.query("DELETE FROM bs_book WHERE bookID = ?", [req.body.bookID], function(err, result){
              if(err){
                  next(err);
                  return;
              }
          });
      }

if(req.body['Edit']){
var context = {};
mysql.pool.query('SELECT * FROM bs_book WHERE bookID=?', [req.query.bookID], function(err, result){
    if(err){
      next(err);
      return;
    }


});
 context.datePublished = req.query.datePublished;
  context.title = req.query.title;
 context.authorFname = req.query.authorFname;
 context.authorLname = req.query.authorLname;
 context.price = req.query.price;
 context.bookID = req.query.bookID;

}
   mysql.pool.query('SELECT * FROM bs_book', function(err, rows, fields){
   if(err){
       next(err);
       return;
   }
   context.bs_book = rows;
   res.render('message4',context);
   });
});



app.get('/updateBook',function(req,res,next){
var context = {};
mysql.pool.query("SELECT * FROM bs_book WHERE bookID=?", [req.query.bookID], function(err, result){
    if(err){
      next(err);
      return;
    }
      var curVals = result[0];
     // console.log(curVals);
      mysql.pool.query("UPDATE bs_book SET datePublished=?, title=?, authorFname=?, authorLname=?, price=? WHERE bookID=? ",
        [req.query.datePublished || curVals.datePublished, req.query.title || curVals.title, req.query.authorFname || curVals.authorFname, req.query.authorLname || curVals.authorLname, req.query.price || curVals.price, req.query.bookID],
        function(err, result){
        if(err){
          next(err);
          return;
        }
        context.datePublished = req.query.datePublished;
        context.title = req.query.title;
        context.authorFname = req.query.authorFname;
        context.authorLname = req.query.authorLname;
        context.price = req.query.price;
		context.bookID = req.query.bookID;
        res.render('updateBook',context);
      });

});
});
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////
//////////////////////
/////PUBLISHER///////
////////////////////////

app.post('/publishers',function(req,res){
  var context = {};
 if(req.body['Add Publisher']){
          mysql.pool.query("INSERT INTO bs_pub (`publisherName`, `address`,`city`,`state`,`zipcode`,`country`) VALUES (?,?,?,?,?,?)", [req.body.publisherName,req.body.address,req.body.city,req.body.state,req.body.zipcode,req.body.country], function(err, result){
              if(err){
                  next(err);
                  return;
              }
           });
   }
   if(req.body['Delete']){
          mysql.pool.query("DELETE FROM bs_pub WHERE publisherID=?", [req.body.publisherID], function(err, result){
              if(err){
                  next(err);
                  return;
              }
          });
      }

if(req.body['Edit']){
var context = {};
mysql.pool.query('SELECT * FROM bs_pub WHERE publisherID=?', [req.query.publisherID], function(err, result){
    if(err){
      next(err);
      return;
    }


});

 context.publisherName = req.query.publisherName;
 context.address = req.query.address;
  context.city = req.query.city;
 context.state = req.query.state;
 context.zipcode = req.query.zipcode;
 context.country = req.query.country;
  context.publisherID = req.query.publisherID;
}
   mysql.pool.query('SELECT * FROM bs_pub', function(err, rows, fields){
   if(err){
       next(err);
       return;
   }
   context.bs_pub = rows;
   res.render('message3',context);
   });
});



app.get('/updatePublisher',function(req,res,next){
var context = {};
mysql.pool.query("SELECT * FROM bs_pub WHERE publisherID=?", [req.query.publisherID], function(err, result){
    if(err){
      next(err);
      return;
    }
      var curVals = result[0];
     // console.log(curVals);
      mysql.pool.query("UPDATE bs_pub SET publisherName=?, address=?, city=?, state=?, zipcode=?, country=? WHERE publisherID=? ", [req.query.publisherName || curVals.publisherName, req.query.address || curVals.address, req.query.city || curVals.city, req.query.state || curVals.state, req.query.zipcode || curVals.zipcode, req.query.country || curVals.country, req.query.publisherID], function(err, result){
        if(err){
          next(err);
          return;
        }
	    context.publisherName = req.query.publisherName;
	    context.address = req.query.address;
	    context.city = req.query.city;
	    context.state = req.query.state;
        context.zipcode = req.query.zipcode;
        context.country = req.query.country;
        context.publisherID = req.query.publisherID;
      res.render('updatePublisher',context);
      });

});
});



/////////////////////

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////
//////////////////////
/////COMPANY///////
////////////////////////

app.post('/companies',function(req,res){
  var context = {};
  if(req.body['Add Company']){
          mysql.pool.query("INSERT INTO bs_company (`companyName`, `address`,`city`,`state`,`zipcode`,`country`) VALUES (?,?,?,?,?,?)", [req.body.companyName,req.body.address,req.body.city,req.body.state,req.body.zipcode,req.body.country], function(err, result){
              if(err){
                  next(err);
                  return;
              }
           });
   }
   if(req.body['Delete']){
          mysql.pool.query("DELETE FROM bs_company WHERE companyID = ?", [req.body.companyID], function(err, result){
              if(err){
                  next(err);
                  return;
              }
          });
      }
	if(req.body['Edit']){
var context = {};
mysql.pool.query('SELECT * FROM bs_company WHERE companyID=?', [req.query.companyID], function(err, result){
    if(err){
      next(err);
      return;
    }


});

 context.companyID = req.query.companyID;
 context.companyName = req.query.companyName;
 context.address = req.query.address;
  context.city = req.query.city;
 context.state = req.query.state;
 context.zipcode = req.query.zipcode;
 context.country = req.query.country;

}
   mysql.pool.query('SELECT * FROM bs_company', function(err, rows, fields){
   if(err){
       next(err);
       return;
   }
   context.bs_pub = rows;
   res.render('message3',context);
   });
});



app.get('/updateCompany',function(req,res,next){
var context = {};
mysql.pool.query("SELECT * FROM bs_company WHERE companyID=?", [req.query.companyID], function(err, result){
    if(err){
      next(err);
      return;
    }
      var curVals = result[0];
     // console.log(curVals);
      mysql.pool.query("UPDATE bs_company SET companyName=?, address=?, city=?, state=?, zipcode=?, country=? WHERE companyID=? ",
        [req.query.companyName || curVals.companyName, req.query.address || curVals.address, req.query.city || curVals.city, req.query.state || curVals.state, req.query.zipcode || curVals.zipcode, req.query.country || curVals.country, req.query.companyID],
        function(err, result){
        if(err){
          next(err);
          return;
        }
        context.companyID = req.query.companyID;
		 context.companyName = req.query.companyName;
		 context.address = req.query.address;
		  context.city = req.query.city;
    	 context.state = req.query.state;
        context.zipcode = req.query.zipcode;
        context.country = req.query.country;
        res.render('updateCompany',context);
      });

});
});



/////////////////////

///////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////

app.post('/tranD',function(req,res){
  var context = {};
 if(req.body['Add Transaction Details']){
          mysql.pool.query("INSERT INTO bs_tranD (`tID`,`author`,`title`) VALUES (?,?,?)", [req.body.tID,req.body.author,req.body.title], function(err, result){
              if(err){
                  next(err);
                  return;
              }
           });
   }
   if(req.body['Delete']){
          mysql.pool.query("DELETE FROM bs_tranD WHERE pID = ?", [req.body.pID], function(err, result){
              if(err){
                  next(err);
                  return;
              }
          });
      }
if(req.body['Edit']){
	var context = {};
	mysql.pool.query("SELECT * FROM bs_tranD WHERE pID=?", [req.query.pID], function(err, result){
	    if(err){
	      next(err);
	      return;
	    }
	});

 	context.tID = req.query.tID;
 	context.author = req.query.author;
 	context.title = req.query.title;
 	context.pID = req.query.ID;
}
   mysql.pool.query('SELECT * FROM bs_tranD', function(err, rows, fields){
   if(err){
       next(err);
       return;
   }
   context.bs_tranD = rows;
   res.render('message',context);
   });
});



app.get('/updateTranD',function(req,res,next){
var context = {};
mysql.pool.query("SELECT * FROM bs_tranD WHERE pID=?", [req.query.pID], function(err, result){
    if(err){
      next(err);
      return;
    }

      var curVals = result[0];
     // console.log(curVals);
      mysql.pool.query("UPDATE bs_tranD SET tID=?, author=?, title=? WHERE pID=? ", [req.query.tID || curVals.tID, req.query.author || curVals.author, req.query.title || curVals.title, req.query.pID],
        function(err, result){
        if(err){
          next(err);
          return;
        }

 	context.tID = req.query.tID;
 	context.author = req.query.author;
 	context.title = req.query.title;
 	context.pID = req.query.pID;
        res.render('updateTranD',context);
      });

});
});


/////////////////////
/////////////////////]/
///////////////////////////////////////////////////
///////////////////////////////////////////////////


///////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////

app.post('/tran',function(req,res){
  var context = {};
 if(req.body['Add Transaction']){
          mysql.pool.query("INSERT INTO bs_tran (`cID`,`eID`) VALUES (?,?)", [req.body.cID,req.body.eID], function(err, result){
              if(err){
                  next(err);
                  return;
              }
           });
   }
   if(req.body['Delete']){
          mysql.pool.query("DELETE FROM bs_tran WHERE tranID = ?", [req.body.tranID], function(err, result){
              if(err){
                  next(err);
                  return;
              }
          });
      }
if(req.body['Edit']){
	var context = {};
	mysql.pool.query("SELECT * FROM bs_tran WHERE tranID=?", [req.query.tranID], function(err, result){
	    if(err){
	      next(err);
	      return;
	    }
	});

 	context.tranID = req.query.tranID;
 	context.cID = req.query.cID;
 	context.eID = req.query.eID;
}
   mysql.pool.query('SELECT * FROM bs_tran', function(err, rows, fields){
   if(err){
       next(err);
       return;
   }
   context.bs_tran = rows;
   res.render('message',context);
   });
});



app.get('/updateTran',function(req,res,next){
var context = {};
mysql.pool.query("SELECT * FROM bs_tran WHERE tranID=?", [req.query.tranID], function(err, result){
    if(err){
      next(err);
      return;
    }

      var curVals = result[0];
     // console.log(curVals);
      mysql.pool.query("UPDATE bs_tran SET cID=?, eID=? WHERE tranID=? ", [req.query.cID || curVals.cID, req.query.eID || curVals.eID, req.query.tranID],
        function(err, result){
        if(err){
          next(err);
          return;
        }

 	context.tranID = req.query.tranID;
 	context.cID = req.query.cID;
 	context.eID = req.query.eID;
        res.render('updateTran',context);
      });

});
});


/////////////////////
/////////////////////]/
///////////////////////////////////////////////////
/*
 SELECT state, title FROM bs_store AS store
 INNER JOIN bs_employee AS emp ON store.storeID = emp.sID
 INNER JOIN bs_tran AS tran ON tran.eID = emp.employeeID
 INNER JOIN bs_tranD AS tranD ON tran.tranID = tranD.tID
 WHERE tranD.title = "Under the Skin"*/
/*
app.get('/mything', function(req, res, next) {
  var ctx = {};
  mysql.pool.query('SELECT state, title FROM bs_store AS store '+
  'INNER JOIN bs_employee AS emp ON store.storeID = emp.sID '+
  'INNER JOIN bs_tran AS tran ON tran.eID = emp.employeeID '+
  'INNER JOIN bs_tranD AS tranD ON tran.tranID = tranD.tID '+
  ' WHERE tranD.title = "Under the Skin";', [req.query.state,req.query.title], function(err, result){
    if (err) {
      next(err);
      return;
    }

    console.log(result);
	ctx.state = result.state;
    ctx.title = result[0].title;
    res.render('mything', ctx);//keep as ctx, why?, result returns object
  });
});
*/
app.get('/mything', function(req, res, next) {
  var ctx = {};
  mysql.pool.query('SELECT state, title FROM bs_store '+
  'INNER JOIN bs_employee AS emp ON bs_store.storeID = emp.sID '+
  'INNER JOIN bs_tran AS tran ON tran.eID = emp.employeeID '+
  'INNER JOIN bs_tranD AS tranD ON tran.tranID = tranD.tID '+
  ' WHERE tranD.title = "Under the Skin";', [req.query.state,req.query.title], function(err, rows, fields){
    if (err) {
      next(err);
      return;
    }

    ctx.results = JSON.stringify(rows);
    res.render('mything', ctx);
  });
});





////////////////
///////////////////////////////////////////////////
app.get('/searchCustomer', function(req, res, next) {
  var ctx = {};
  mysql.pool.query('SELECT * FROM  bs_customer WHERE bs_customer.lastName=?', [req.query.lastName], function(err, rows, fields){
    if (err) {
      next(err);
      return;
    }

    ctx.results = JSON.stringify(rows);
    res.render('mything', ctx);
  });
});

app.get('/searchEmployee', function(req, res, next) {
  var ctx = {};
  mysql.pool.query('SELECT * FROM  bs_employee WHERE bs_employee.lastName=?', [req.query.lastName], function(err, rows, fields){
    if (err) {
      next(err);
      return;
    }

    ctx.results = JSON.stringify(rows);
    res.render('mything', ctx);
  });
});

app.get('/searchStore', function(req, res, next) {
  var ctx = {};
  mysql.pool.query('SELECT * FROM  bs_store WHERE bs_store.state=?', [req.query.state], function(err, rows, fields){
    if (err) {
      next(err);
      return;
    }

    ctx.results = JSON.stringify(rows);
    res.render('mything', ctx);
  });
});

app.get('/searchTitle', function(req, res, next) {
  var ctx = {};
  mysql.pool.query('SELECT * FROM  bs_tranD WHERE bs_tranD.title=?', [req.query.title], function(err, rows, fields){
    if (err) {
      next(err);
      return;
    }

    ctx.results = JSON.stringify(rows);
    res.render('mything', ctx);
  });
});

app.get('/searchBook', function(req, res, next) {
  var ctx = {};
  mysql.pool.query('SELECT * FROM  bs_tranD WHERE bs_tranD.title=?', [req.query.title], function(err, rows, fields){
    if (err) {
      next(err);
      return;
    }

    ctx.results = JSON.stringify(rows);
    res.render('mything', ctx);
  });
});

app.get('/searchBook', function(req, res, next) {
  var ctx = {};
  mysql.pool.query('SELECT * FROM  bs_tranD WHERE bs_tranD.title=?', [req.query.title], function(err, rows, fields){
    if (err) {
      next(err);
      return;
    }

    ctx.results = JSON.stringify(rows);
    res.render('mything', ctx);
  });
});
app.get('/mysearch', function(req, res, next) {
  var ctx = {};
  console.log(req.query.tables);
  mysql.pool.query('SELECT * FROM ' + req.query.tables + ' WHERE ' + req.query.tables + '.' + req.query.choices + ' = ?',[req.query.myname], function(err, rows, fields){
    if (err) {
      next(err);
      return;
    }
    ctx.results = JSON.stringify(rows);
    res.render('mything', ctx);
  });
});

app.get('/manysearch', function(req, res, next) {
  var ctx = {};
  console.log(req.query.tables);
  if(req.query.tables == 'bs_customer'){
  mysql.pool.query('SELECT * FROM bs_customer AS cust INNER JOIN bs_tran AS tran ON tran.cID = cust.customerID INNER JOIN bs_employee AS emp ON emp.employeeID = tran.eID WHERE emp.' + req.query.choices + " = '" + req.query.myname + "'", function(err, rows, fields){
    if (err) {
      next(err);
      return;
    }
    ctx.results = JSON.stringify(rows);
    res.render('mything', ctx);
  });
}
if(req.query.tables == 'bs_employee'){
	mysql.pool.query('SELECT * FROM bs_employee AS emp INNER JOIN bs_tran AS tran ON tran.eID = emp.employeeID INNER JOIN bs_customer AS cust ON cust.customerID = tran.cID WHERE cust.' + req.query.choices + " = '" + req.query.myname + "'", function(err, rows, fields){
	    if (err) {
	      next(err);
	      return;
	    }
	    ctx.results = JSON.stringify(rows);
	    res.render('mything', ctx);
  });
}
});


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
