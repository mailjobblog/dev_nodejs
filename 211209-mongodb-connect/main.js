const { MongoClient } = require('mongodb');

// 定义数据库连接地址
// 这里：这里的用户名和密码要改成你自己的
const uri = "mongodb+srv://test_user:test_pwd@cluster0.sy0un.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// 定义异步方法
const testMongo = async () => {
    // connect to your cluster
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('t_db');
    // 数据插入测试
    const items = await db.collection('t_coll').insertOne({ name: "test_names" });
    console.log(items);
    // close connection
    client.close();
}

// 调用异步方法
testMongo();