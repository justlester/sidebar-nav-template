# sidebar-nav-template

Custom Responsive Sidebar Navigation Template
<ul>
  <li>No Bootstrap or JQuery used</li>
  <li>Uses checkbox trick</li>
  <li>Mobile Responsive</li>
</ul>

<h3>Import</h3>

```html
  <link href='dist/css/app.css' rel='stylesheet'>
  ...
  <!--APP.JS FILE SHOULD BE PLACE BEFORE BODY END TAG-->
  <script type='text/javascript' src='dist/js/app.js'></script>
```

<h3>Usage</h3>
<p>Place the code inside the body tag</p>


```html
    <div class="dashboard-layout">
        <!-- NEEDED FOR TOGGLING  -->
        <input type="checkbox" id="checkbox-main-nav-toggler"/>
        <input type="checkbox" id="checkbox-mobile-nav-toggler"/>

        <!-- SIDE NAV  -->
        <div class="main-nav">
            <a href="#" class="main-nav-header">
                <div class="main-nav-logo">
                    <img src="images/logo-square.png" alt="logo"/>
                </div>
                <span class="main-nav-title">
                    Lorem ipsum dolor sit amet.
                </span>
            </a>
            <div class="main-nav-shortcut-menu">
                <ul class="shortcut-list">      
                    <!--SHORTCUT ITEM WITHOUT BADGE-->
                    <li class="shortcut-item">
                        <a class="shortcut-link" href="#">
                            <span><i class="fas fa-user-circle"></i></span>
                            <span>Profile</span>
                        </a>
                    </li>
                    <!--SHORTCUT ITEM WITH BADGE-->
                    <li class="shortcut-item mobile-hide">
                        <a class="shortcut-link" href="#">
                            <span><i class="fas fa-bell"></i></span>
                            <span>Notifications</span>
                            <span class="shortcut-badge">99+</span>
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="main-nav-menu">
                <!--MAIN NAV ITEM-->
                <li class="nav-link-item">
                    <a class="active" href="#" title="Link 1">
                        <span><i class="fas fa-building"></i></span>
                        <span>Link 1</span>
                    </a>
                </li>
                <li class="nav-link-item">
                    <a href="#" title="Link 2">
                        <span><i class="fas fa-building"></i></span>
                        <span>Link 2</span>
                    </a>
                </li>
                <li class="nav-link-item">
                    <a href="#" title="Link 3">
                        <span><i class="fas fa-building"></i></span>
                        <span>Link 3</span>
                    </a>
                </li>
            </ul>
            <div class="main-nav-footer">
                <!-- MAIN NAV TOGGLE BUTTON  -->
                <label class="btn-toggle-main-nav" for="checkbox-main-nav-toggler" title="Toggle Main Navigation">
                </label>
            </div>
        </div>
        <!-- PAGE CONTENT -->
        <div class="page-content bg-light">
            <!-- NEEDED FOR TOGGLING  -->
            <label class="mobile-overlay" for="checkbox-mobile-nav-toggler"></label>
            <!-- MOBILE HEADER -->
            <div class="mobile-nav-header">
                <!--LEFT BUTTONS GROUP-->
                <div class="mobile-nav-buttons-left">
                    <!-- MOBILE NAV TOGGLE BUTTON  -->
                    <label class="mobile-nav-btn" for="checkbox-mobile-nav-toggler">
                            <i class="fas fa-bars fa-lg"></i>
                    </label>
                </div>
                <!--TITLE-->
                <div class="mobile-nav-title">
                    <a href="#">
                        <img src="images/logo-square.png" alt="logo"/>
                    </a>
                </div>
                <!--RIGHT BUTTONS GROUP-->
                <div class="mobile-nav-buttons-right">
                    <a href="#" class="mobile-nav-btn">
                        <i class="fas fa-bell fa-lg"></i>
                        <span class="mobile-nav-btn-badge">99+</span>
                    </a>
                    <a href="#" class="mobile-nav-btn">
                        <i class="fas fa-envelope"></i>
                        <span class="mobile-nav-btn-badge">99+</span>
                    </a>
                </div>

            </div>
            <!-- PAGE CONTENT SCROLL -->
            <div class="page-content-scroll">
                ...
                <!--YOUR CONTENT-->
                ...
            </div>
        </div>
    </div>
```