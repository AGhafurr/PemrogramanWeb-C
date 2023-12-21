<?php

namespace app\Models;

include "app/Config/DatabaseConfig.php";

use app\Config\DatabaseConfig;
use mysqli;

class Product extends DatabaseConfig
{
    public $conn;

    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);
        //check connection
        if($this->conn->connect_error){
            die("Connection failed: ". $this->conn->connect_error);
        }
    }

    //TAMPILIN SEMUA DATA
    public function findAll()
    {
        $sql = "SELECT * FROM products";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    //TAMPILIN DATA BY ID
    public function findById($id)
    {
        $sql = "SELECT * FROM products WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt -> bind_param("i", $id);
        $stmt -> execute();
        $result = $stmt->get_result();
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    //INPUT DATA
    public function create($data)
    {
        $productName = $data['product_name'];
        $query = "INSERT INTO products (product_name) VALUES (?)";
        $stmt = $this->conn->prepare($query);
        $stmt -> bind_param("s", $productName);
        $stmt -> execute();
        $this->conn->close();
    }

    //UPDATE BY ID
    public function update($data, $id)
    {
        $productName = $data['product_name'];
        $query = "UPDATE products SET product_name = ? WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt -> bind_param("si", $productName, $id);
        $stmt -> execute();
        $this->conn->close();
    }

    //DELETE BY ID
    public function destroy($id)
    {
        $query = "DELETE FROM products WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt -> bind_param("i", $id);
        $stmt -> execute();
        $this->conn->close();
    }

    public function findAllCategories()
    {
        $sql = "SELECT * FROM categories";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }
    
    public function findAllWithCategory()
    {
        $sql = "SELECT products.product_name, categories.Category_Name, categories.Deskripsi FROM products JOIN categories ON products.id = categories.id_Category";

        $result = $this->conn->query($sql);
        $this->conn->close();

        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    public function createCategory($data)
    {
        $idCategory = $data['id_Category'];
        $productName = $data['Category_Name'];
        $productDescription = $data['Deskripsi'];
        $sql = "INSERT INTO `categories` (`id_Category`, `Category_Name`, `Deskripsi`) VALUES (?, ?, ?);";
        
        $stmt = $this->conn->prepare($sql);
        $stmt -> bind_param("s",$idCategory, $productName, $productDescription);
        $stmt -> execute();
        $this->conn->close();
    }

    public function updateProductNameWithCategory($data, $productId, $categoryId)
    {
        $productName = $data['product_name'];

        $query = "UPDATE products
                INNER JOIN categories ON products.id_Category = categories.id
                SET products.product_name = ?
                WHERE products.id = ? AND categories.id = ?";
        
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sii", $productName, $productId, $categoryId);
        $stmt->execute();
        $stmt->close();
    }

    public function destroyCategories($id)
    {
        $query = "DELETE FROM products WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt -> bind_param("i", $id);
        $stmt -> execute();
        $this->conn->close();
    }



}