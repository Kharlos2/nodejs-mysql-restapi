import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM rrhh");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM rrhh WHERE id = ?", [req.params.id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "rrhh not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};


export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO rrhh (name, salary) VALUES (?, ?)",
      [name, salary]
      );
      res.status(201).json({ id: rows.insertId, name, salary });
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
  
  export const deleteEmployee = async (req, res) => {
    try {

      const [result] = await pool.query("DELETE FROM rrhh WHERE id = ?", [req.params.id]);
  
      if (result.affectedRows <= 0) {
        return res.status(404).json({ message: "rrhh not found" });
      }
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
  export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    try {

    const [result] = await pool.query(
      "UPDATE rhh SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );
      console.log(result)
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
