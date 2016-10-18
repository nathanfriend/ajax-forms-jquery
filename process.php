<?php

$errors = array();
$data = array();

// validate the variables
if (empty($_POST['name']))
    $errors['name'] = 'Name is required.';

if (empty($_POST['email']))
    $errors['email'] = 'Email is required.';

if (empty($_POST['dob']))
    $errors['dob'] = 'dob is required.';

if (empty($_POST['country']))
    $errors['country'] = 'Country alias is required.';

// return a response ===========================================================
// if there are any errors in our errors array, return a success boolean of false
if (!empty($errors)) {
    // if there are items in our errors array, return those errors
    $data['success'] = false;
    $data['errors'] = $errors;
} else {

    // if there are no errors process our form, then return a message
    $data['success'] = true;
    $data['message'] = 'Subscribed, thanks.';
}

// return all our data to an AJAX call
echo json_encode($data);
