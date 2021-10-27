<template>
    <ul class="main-menu nav justify-content-center">
        <li>
            <n-link to="/">Home</n-link>
        </li>
        <li>
            <n-link to="/sobre">Sobre</n-link>
        </li>
        <li class="has-submenu">
            <n-link to="/servicos">Serviços</n-link>
            <!-- <ul class="submenu-nav">
                <li>
                    <n-link to="/service">Serviços</n-link>
                </li>
                <li>
                    <n-link to="/service-details">Service Details</n-link>
                </li>
            </ul> -->
        </li>
        <!-- <li class="has-submenu">
            <n-link to="/project">Project</n-link>
            <ul class="submenu-nav">
                <li>
                    <n-link to="/project">Project</n-link>
                </li>
                <li>
                    <n-link to="/project-details">Project Details</n-link>
                </li>
            </ul>
        </li> -->
        <li class="has-submenu">
            <n-link to="/blog">Blog</n-link>
            <!-- <ul class="submenu-nav">
                <li>
                    <n-link to="/blog">Blog</n-link>
                </li>
                <li>
                    <n-link to="/blog-details">Blog Details</n-link>
                </li>
            </ul> -->
        </li>
        <li>
            <n-link to="/contato">Contato</n-link>
        </li>
    </ul>
</template>