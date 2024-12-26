import sql from 'mssql';

const config = {
    user: 'username',
    password: 'password', 
    server: 'localhost', 
    database: 'database_name', 
    options: {
        encrypt: true, 
        trustServerCertificate: true 
    }
};


export const QuerySQL = async (Syntax) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .query(Syntax); 
        await sql.close(); 
        return result.recordset;
    } catch (error) {
        console.error('Lỗi truy vấn:', error);
        throw error; 
    }
};
