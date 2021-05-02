'use strict';

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.RDS_HOST,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASS,
  database: process.env.RDS_DATABASE
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
