import React, { Component } from 'react';

class Footer extends Component {

    render() { 
        return ( 
            <footer className="footer">
                <div className="container-fluid">
                <nav>
                    <ul>
                    <li>
                        <a href="#">
                        MIS Application
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        About Us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Blog
                        </a>
                    </li>
                    </ul>
                </nav>
                <div className="copyright">
                    &copy;
                    <script>
                    document.write(new Date().getFullYear())
                    </script>, Designed by
                    <a href="#" target="_blank">PHP TEAM</a>.
                </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;