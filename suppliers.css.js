<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Suppliers</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        .navbar {
            background: #333;
            padding: 15px;
            color: white;
            display: flex;
            justify-content: space-between;
        }

        .navbar a {
            color: white;
            text-decoration: none;
            margin-right: 20px;
        }

        .container {
            max-width: 1100px;
            margin: auto;
            padding: 20px;
        }

        h1 {
            margin-bottom: 10px;
        }

        input[type="text"] {
            padding: 10px;
            width: 300px;
            margin-bottom: 15px;
        }

        button {
            padding: 10px 14px;
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
        }

        table, th, td {
            border: 1px solid #ccc;
        }

        th, td {
            padding: 12px;
            text-align: left;
        }

        th {
            background: #eaeaea;
        }
    </style>
</head>
<body>

    <div class="navbar">
        <div>
            <a href="#">Home</a>
            <a href="#">View Items</a>
        </div>
        <div>Suppliers</div>
    </div>

    <div class="container">
        <h1>Suppliers</h1>

        <input type="text" id="search" placeholder="Search suppliers..." onkeyup="filterTable()">
        <button onclick="alert('Add Supplier form not yet connected')">Add Supplier</button>

        <table id="supplierTable">
            <tr>
                <th>Supplier ID</th>
                <th>Name</th>
                <th>Contact Person</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
            </tr>

            <tr>
                <td>S001</td>
                <td>TechZone</td>
                <td>Mark Dela Cruz</td>
                <td>0917-123-4567</td>
                <td>mark@techzone.com</td>
                <td>Manila, Philippines</td>
            </tr>

            <tr>
                <td>S002</td>
                <td>FurniPro</td>
                <td>Ana Santos</td>
                <td>0921-555-7890</td>
                <td>ana@furnipro.ph</td>
                <td>Quezon City, Philippines</td>
            </tr>

            <tr>
                <td>S003</td>
                <td>PaperLine</td>
                <td>Leo Mendoza</td>
                <td>0938-777-2222</td>
                <td>leo@paperline.ph</td>
                <td>Cebu City, Philippines</td>
            </tr>
        </table>

    </div>

    <script>
        function filterTable() {
            const input = document.getElementById("search").value.toLowerCase();
            const rows = document.querySelectorAll("#supplierTable tr");

            for (let i = 1; i < rows.length; i++) {
                let rowText = rows[i].innerText.toLowerCase();
                rows[i].style.display = rowText.includes(input) ? "" : "none";
            }
        }
    </script>

</body>
</html>
