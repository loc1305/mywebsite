import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content />
        <meta name="author" content />
        <title>Agency - Start Bootstrap Theme</title>
        {/* Favicon*/}
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* Font Awesome icons (free version)*/}
        {/* Google fonts*/}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="css/styles.css" rel="stylesheet" />
            </div>
        );
    }
}

export default Header;