
### Documentation Below the Diagram

#### Entities and Attributes

1. **PRODUCT**:
   - **Attributes**:
     - `product_id` (PK): Unique identifier for each product.
     - `name`: Name of the product.
     - `model`: Model name or number of the shoe.
     - `price`: Selling price of the product.
     - `stock_quantity`: Number of items available for sale.

2. **CUSTOMER**:
   - **Attributes**:
     - `customer_id` (PK): Unique identifier for each customer.
     - `name`: Customer's full name.
     - `email`: Email address of the customer.
     - `phone`: Contact number of the customer.

3. **SALES**:
   - **Attributes**:
     - `sale_id` (PK): Unique identifier for each sale transaction.
     - `sale_date`: The date when the sale took place.
     - `total_amount`: Total monetary value of the sale.
     - `customer_id` (FK): Identifier for the customer making the purchase, linking to the CUSTOMER entity.
     - `product_id` (FK): Identifier for the product sold, linking to the PRODUCT entity.

4. **INVENTORY**:
   - **Attributes**:
     - `product_id` (PK): Unique identifier for the product, which is also a Foreign Key that connects to the PRODUCT entity.
     - `quantity_in_stock`: Number of units currently in stock.

#### Relationships

1. **PRODUCT to SALES**:
   - **Type**: One-to-Many (1:M)
   - **Significance**: Each product can be associated with multiple sales transactions. This relationship allows the store to track how many times each shoe model is sold, which helps in assessing product popularity and managing inventory.

2. **CUSTOMER to SALES**:
   - **Type**: One-to-Many (1:M)
   - **Significance**: Each customer can make multiple purchases. This relationship is essential for customer relationship management, allowing the store to analyze buying patterns and tailor marketing strategies to individual customers.

3. **PRODUCT to INVENTORY**:
   - **Type**: One-to-One (1:1)
   - **Significance**: Each product is tracked in the inventory to monitor stock levels. This relationship is crucial for inventory management, ensuring that the store can maintain adequate stock to meet customer demand while minimizing overstock.


