const header = document.getElementsByTagName('header');

const headerHTML = `
<div class="logo">
<a href="http://127.0.0.1:5500/"><img src="http://127.0.0.1:5500/img/logo.webp" alt=""></a> 
</div>
<div class="navigation">
 <nav>
   <ul class="list-h">
     <!-- <hr class="opt-1"> -->
     <li class="opt-1"><a href="http://127.0.0.1:5500/">Home</a></li>
     <hr class="opt-2">
     <li class="opt-2"><a href="http://127.0.0.1:5500/pages/nosotros.html">Nosotros</a></li>
     <hr class="opt-3">
     <li class="opt-3"><a href="http://127.0.0.1:5500/pages/apartamentos_premium.html" class="economia-plateada-link">Apartamentos Silver</a></li>
     <hr class="opt-4">
     <li class="opt-4"><a href="http://127.0.0.1:5500/pages/inversion_retiro.html" class="economia-plateada-link">Inversion Retiro</a></li>
     <hr class="opt-5">
     <li class="opt-5" id="more">
         <a href="#"><p>Mas <i class="fa-solid fa-chevron-down"></i></p></a>
         <ul class="more-list">
             <li class="opt-1-v"><a href="http://127.0.0.1:5500/">Home</a></li>
             <li class="opt-2-v"><a href="http://127.0.0.1:5500/pages/nosotros.html">Nosotros</a></li>
             <li class="opt-3-v"><a href="http://127.0.0.1:5500/pages/apartamentos_premium.html" class="economia-plateada-link">Apartamentos Silver</a></li>
             <li class="opt-4-v"><a href="http://127.0.0.1:5500/pages/inversion_retiro.html" class="economia-plateada-link">Inversion Retiro</a></li>
             <li><a href="http://127.0.0.1:5500/pages/llave_en_mano.html"><p>Llave en mano</p></a></li>
             <li><a href="http://127.0.0.1:5500/pages/presupuestos.html"><p>Presupuestos</p></a></li>
             <li><a href="http://127.0.0.1:5500/pages/oportunidades.html"><p>Oportunidades</p></a></li>
             <li><a href="#"><p>Contacto</p></a></li>
         </ul>
     </li>
     <!-- <hr class="opt-5"> -->
 </ul>
 </nav>
</div>
`;

header[0].innerHTML = headerHTML