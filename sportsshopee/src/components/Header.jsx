import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Header extends Component {

    render() {

        return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">
                    <p><h2 class="ui red inverted header">Capgemini Sports Shop</h2></p>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                            <a class="nav-link" href="/" ><span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/" >Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/AboutUs">About Us<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/Contact">Contact<span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <div class="col-sm-1" >
                    <a  href="/" class="ui left aligned header blue inverted"> Logout <span class="sr-only">(current)</span></a>
                    </div>

                </div>
            </nav>

        );


    }

}