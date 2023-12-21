<?php

namespace app\Controller;

include "app/Traits/ApiResponseFormatter.php";
include "app/Models/Product.php";

use app\Models\Product;
use app\Traits\ApiResponseFormatter;

class ProductController
{
    use ApiResponseFormatter;

    public function index()
    {
        $productModel = new Product();
        $response = $productModel->findAll();
        return $this->apiResponse(200, "Success", $response);
    }

    public function getById($id)
    {
        $productModel = new Product();
        $response = $productModel->findById($id);
        return $this->apiResponse(200, "Success", $response);
    }

    public function insert()
    {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);

        if(json_last_error()){
            return $this->apiResponse(400, "Error Invalid Input", null);
        }

        $productModel = new Product();
        $response = $productModel->create([
            "product_name" => $inputData['product_name']
        ]);

        return $this->apiResponse(200, "Success", $response);
    }

    public function update($id)
    {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);

        if(json_last_error()){
            return $this->apiResponse(400, "Error Invalid Input", null);
        }

        $productModel = new Product();
        $response = $productModel->update([
            "product_name" => $inputData['product_name']
        ], $id);

        return $this->apiResponse(200, "Success", $response);
    }

    public function delete($id)
    {
        $productModel = new Product();
        $response = $productModel->destroy($id);

        return $this->apiResponse(200, "Success", $response);
    }

    public function indexCategories()
    {
        $productModel = new Product();
        $response = $productModel->findAllCategories();
        return $this->apiResponse(200, "Success", $response);
    }

    public function getAllWithDescription()
    {
        $productModel = new Product();
        $response = $productModel->findAllWithCategory();

        return $this->apiResponse(200, "Success", $response);
    }

    public function insertCategory()
    {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);

        if(json_last_error()){
            return $this->apiResponse(400, "Error Invalid Input", null);
        }

        $productModel = new Product();
        $response = $productModel->createCategory(
            ["id_Category" => $inputData['id_Category']],
            ["Category_Name" => $inputData['Category_Name']],
            ["Deskripsi" => $inputData['Deskripsi']]
        );

        return $this->apiResponse(200, "Success", $response);
    }

    public function updateWithCategories($id)
    {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);

        if (json_last_error()) {
            return $this->apiResponse(400, "Error Invalid Input", null);
        }

        $categoryId = $inputData['category_id'] ?? null;
        if (!$categoryId) {
            return $this->apiResponse(400, "Category ID is required", null);
        }

        $productModel = new Product();
        $response = $productModel->updateProductNameWithCategory(
            [
                "product_name" => $inputData['product_name'],
                "category_name" => $inputData['category_name'],
                "description" => $inputData['description']
            ],
            $id,
            $categoryId
        );

        if ($response) {
            return $this->apiResponse(200, "Success", $response);
        } else {
            return $this->apiResponse(500, "Failed to update product details", null);
        }
    }

    public function deleteCategory($id)
    {
        $productModel = new Product();
        $response = $productModel->destroy($id);

        return $this->apiResponse(200, "Success", $response);
    }

}