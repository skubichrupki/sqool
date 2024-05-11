const queries = {
// get tickets for select component
    select_query: `
    SELECT item_id
    ,item_number
    ,item_description
    ,item_type_id
    ,supplier_id
    ,country_origin_id
    ,stat.status_id
    ,stat.description as status
    ,date_format(created_on, '%d-%m-%y, %H:%i') as created_on
    ,date_format(updated_on, '%d-%m-%y, %H:%i') as updated_on 
    FROM react.item
    INNER JOIN react.status as stat
    ON stat.status_id = item.status_id`,
// create ticket
    insert_query : `
    INSERT INTO item (item_number, item_description, status_id) 
    VALUES (?,?,?)`,
// update ticket
    update_query : `
    UPDATE item 
    SET item_number = ?, item_description = ?, status_id = ?, updated_on = now() 
    WHERE item_id = ?`,
}

module.exports = queries;