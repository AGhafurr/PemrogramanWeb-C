<?php

namespace app\Routes;

include "app/Controller/ProductController.php";

use app\Controller\ProductController;

class ProductRoutes
{
    public function handle($method, $path)
    {
        if ($method == 'GET' && $path == '/api/product'){
            $controller = new ProductController();
            echo $controller->index();
        }

        if ($method == 'GET' && strpos($path, '/api/product') == 0 ){
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts)-1];

            $controller = new ProductController();
            echo $controller->getById($id);
        }

        if ($method == 'POST' && $path == '/api/product'){
            $controller = new ProductController();
            echo $controller->insert();
        }

        if ($method == 'PUT' && strpos($path,'/api/product') == 0 ){
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts)-1];

            $controller = new ProductController();
            echo $controller->update($id);
        }
        if ($method == 'DELETE' && strpos($path,'/api/product') == 0 ){
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts)-1];

            $controller = new ProductController();
            echo $controller->delete($id);
        }
        if ($method == 'GET' && $path == '/api/categories'){
            $controller = new ProductController();
            echo $controller->indexCategories();
        }
        if ($method == 'GET' && $path == '/api/productcategories') {
            $controller = new ProductController();
            echo $controller->getAllWithDescription();
        }

        if ($method == 'POST' && $path == '/api/categories'){
            $controller = new ProductController();
            echo $controller->insertCategory();
        }

        if ($method == 'PUT' && strpos($path,'/api/productcategories') == 0 ){
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts)-1];

            $controller = new ProductController();
            echo $controller->updateWithCategories($id);
        }

        if ($method == 'DELETE' && strpos($path,'/api/categiries') == 0 ){
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts)-1];

            $controller = new ProductController();
            echo $controller->deleteCategory($id);
        }
    }
}