'use strict';

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "database-1.c3aoif6g4a6s.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "91053989",
  database: "crud_aws"
});


module.exports.getFuncionarios = async (event) => {

  try {

    const result = await new Promise((resolve) => {
      connection.query("SELECT * FROM funcionario", function (err, results) {
        resolve(results);
      })
    })

    connection.end();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }

};

module.exports.postFuncionarios = async (event) => {

  const { idade, nome, cargo } = JSON.parse(event.body);

  try {

    await new Promise((resolve) => {
      connection.query(`INSERT INTO funcionario (idade, nome, cargo) VALUES (${idade},'${nome}','${cargo}');`,
        function (err, results) {
          resolve(results);
        });
    });

    connection.end();

    return {
      statusCode: 200
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
};

module.exports.putFuncionarios = async (event) => {

  const { id, idade, nome, cargo } = JSON.parse(event.body);
  console.log(event.body);

  try {
    await new Promise((resolve) => {
      connection.query(`UPDATE funcionario SET idade = ${idade}, nome='${nome}' , cargo='${cargo}' WHERE id=${id};`,
        function (err, results) {
          resolve(results);
        });
    });

    connection.end();

    return {
      statusCode: 200
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: error
    };
  }
};

module.exports.deleteFuncionarios = async (event) => {

  const { id = '' } = event.queryStringParameters;

  try {
    await new Promise((resolve) => {
      connection.query(`DELETE FROM funcionario WHERE id=${id};`,
        function (err, results) {
          resolve(results);
        });
    });

    connection.end();

    return {
      statusCode: 200
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: error
    };
  }
};
