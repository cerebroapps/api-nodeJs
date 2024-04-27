import { pool } from '../db.js'


export const getEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query("call spConsultaEmpleados();")
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            estado: -1,
            message: error.message
        });
    }
}

export const getEmpleado = async (req, res) => {
    try {
        const _id = req.params.id;
        const [rows] = await pool.query("call spConsultaEmpleadosById(?)", _id);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            estado: -1,
            message: error.message
        });
    }
}


export const createEmpleado = async (req, res) => {
    try {
        const { Nombres, Apellidos, fechanacimiento, telefono } = req.body;
        const [rows] = await pool.query('call spCrearEmpleado(?,?,?,?)',
            [Nombres, Apellidos, fechanacimiento, telefono]);
        res.send({
            id: rows.insertId,
            Nombres, Apellidos
        });
    } catch (error) {
        return res.status(500).json({
            estado: -1,
            message: error.message
        });
    }
};


export const editEmpleado = async (req, res) => {
    try {
        const { id, Nombres, Apellidos, fechanacimiento, telefono } = req.body;
        const result = await pool.query('call spActualizarEmpleado(?,?,?,?,?)',
            [id, Nombres, Apellidos, fechanacimiento, telefono]
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            estado: -1,
            message: error.message
        });
    }
};


export const deleteEmpleado = async (req, res) => {
    try {
        const _id = req.params.id;
        const [rows] = await pool.query("call spEliminaEmpleado(?)", _id);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            estado: -1,
            message: error.message
        });
    }
};