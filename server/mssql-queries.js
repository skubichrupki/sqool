const queries = {
    select_query: `
    SELECT item_id,
    item_number,
    item_description,
    item_type_id,
    supplier_id,
    country_origin_id,
    stat.status_id,
    stat.description AS status,
    FORMAT(created_on, 'dd-MM-yy HH:mm') AS created_on,
    FORMAT(created_on, 'dd-MM-yy HH:mm') AS updated_on
    FROM react.dbo.item
    INNER JOIN react.dbo.status as stat
    ON stat.status_id = item.status_id
    `,
    insert_query : `
    INSERT INTO item (item_number, item_description, status_id) 
    VALUES (@item_number, @item_description, @status_id)
    `,
    update_query : `
    UPDATE item 
    SET item_number = @item_number, item_description = @item_description, status_id = @status_id, updated_on = GETDATE() 
    WHERE item_id = @item_id
    `
}
    
module.exports = queries;