const productos = [
  {
    nombre: "Helado de vainilla",
    categoriaId: 1,
    precio: 3.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680048721/HELADOS/Helado_de_vainilla_rkqutz.jpg",
  },
  {
    nombre: "Helado de fresa",
    categoriaId: 2,
    precio: 4,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680048721/HELADOS/Helado_de_fresa_yjykhr.jpg",
  },
  {
    nombre: "Helado de limón",
    categoriaId: 3,
    precio: 3.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680048720/HELADOS/Helado_de_lim%C3%B3n_nkkcew.jpg",
  },
  {
    nombre: "Helado de mango",
    categoriaId: 4,
    precio: 4.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680048722/HELADOS/Helado_de_mango_oeluwq.jpg",
  },
  {
    nombre: "Helado de chocolate",
    categoriaId: 5,
    precio: 5.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680048721/HELADOS/Helado_de_chocolate_cbt61f.jpg",
  },
  {
    nombre: "Helado de plátano",
    categoriaId: 6,
    precio: 4,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680048721/HELADOS/Helado_de_pl%C3%A1tano_i7vsj0.jpg",
  },
  {
    nombre: "Milkshake de vainilla",
    categoriaId: 1,
    precio: 5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680048721/HELADOS/Milkshake_de_vainilla_q80d2h.jpg",
  },
  {
    nombre: "Milkshake de fresa",
    categoriaId: 2,
    precio: 5.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680048720/HELADOS/Milkshake_de_fresa_gvtrjq.jpg",
  },
  {
    nombre: "Milkshake de limón",
    categoriaId: 2,
    precio: 4.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680048720/HELADOS/Milkshake_de_lim%C3%B3n_a4qfyf.jpg",
  },
  {
    nombre: "Milkshake de chocolate",
    categoriaId: 5,
    precio: 6.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049386/HELADOS/Milkshake_de_chocolate_bxalfk.jpg",
  },
  {
    nombre: "Postre de vainilla",
    categoriaId: 1,
    precio: 4.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049518/HELADOS/Postre_de_vainilla_t7lywb.jpg",
  },
  {
    nombre: "Postre de fresa",
    categoriaId: 2,
    precio: 5.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049549/HELADOS/Postre_de_fresa_vusjsp.jpg",
  },
  {
    nombre: "Postre de limón",
    categoriaId: 3,
    precio: 4.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049597/HELADOS/Postre_de_lim%C3%B3n_aiyjr7.jpg",
  },
  {
    nombre: "Postre de mango",
    categoriaId: 4,
    precio: 5.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049642/HELADOS/Postre_de_mango_m1kue8.jpg",
  },
  {
    nombre: "Postre de chocolate",
    categoriaId: 5,
    precio: 6.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049674/HELADOS/Postre_de_chocolate_mdbld3.jpg",
  },
  {
    nombre: "Batido de plátano",
    categoriaId: 6,
    precio: 5.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049779/HELADOS/Batido_de_pl%C3%A1tano_l1ysh8.jpg",
  },
  {
    nombre: "Galletas de vainilla",
    categoriaId: 1,
    precio: 3.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049824/HELADOS/Galletas_de_vainilla_dn5iep.jpg",
  },
  {
    nombre: "Pastel de fresa",
    categoriaId: 2,
    precio: 7.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049870/HELADOS/Pastel_de_fresa_ilptvn.jpg",
  },
  {
    nombre: "Pastel de limón",
    categoriaId: 3,
    precio: 6.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049919/HELADOS/Pastel_de_lim%C3%B3n_jzuug3.jpg",
  },
  {
    nombre: "Barra de chocolate",
    categoriaId: 5,
    precio: 2.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680049951/HELADOS/Barra_de_chocolate_chtpe9.jpg",
  },
  {
    nombre: "Paleta de vainilla",
    categoriaId: 1,
    precio: 1.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050002/HELADOS/Paleta_de_vainilla_achrsc.jpg",
  },
  {
    nombre: "Paleta de fresa",
    categoriaId: 2,
    precio: 2.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050065/HELADOS/Paleta_de_fresa_qopk3a.jpg",
  },
  {
    nombre: "Paleta de limón",
    categoriaId: 3,
    precio: 1.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050096/HELADOS/Paleta_de_lim%C3%B3n_arntee.jpg",
  },
  {
    nombre: "Paleta de mango",
    categoriaId: 4,
    precio: 2.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050145/HELADOS/Paleta_de_mango_fdj8qh.jpg",
  },
  {
    nombre: "Paleta de chocolate",
    categoriaId: 5,
    precio: 3.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050207/HELADOS/Paleta_de_chocolate_b7hdgh.jpg",
  },
  {
    nombre: "Paleta de plátano",
    categoriaId: 6,
    precio: 2.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050247/HELADOS/Paleta_de_pl%C3%A1tano_xkwa6j.jpg",
  },
  {
    nombre: "Tarta de vainilla",
    categoriaId: 1,
    precio: 8.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050358/HELADOS/Tarta_de_vainilla_lvk4ek.jpg",
  },
  {
    nombre: "Tarta de fresa",
    categoriaId: 2,
    precio: 10.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050392/HELADOS/Tarta_de_fresa_vutwgy.jpg",
  },
  {
    nombre: "Tarta de limón",
    categoriaId: 3,
    precio: 9.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050423/HELADOS/Tarta_de_lim%C3%B3n_zsyxvy.jpg",
  },
  {
    nombre: "Tarta de mango",
    categoriaId: 4,
    precio: 11.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050460/HELADOS/Tarta_de_mango_r7voup.jpg",
  },
  {
    nombre: "Tarta de chocolate",
    categoriaId: 5,
    precio: 12.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050492/HELADOS/Tarta_de_chocolate_bi4yju.jpg",
  },
  {
    nombre: "Cupcake de vainilla",
    categoriaId: 1,
    precio: 2.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050522/HELADOS/Cupcake_de_vainilla_guxttf.jpg",
  },
  {
    nombre: "Cupcake de fresa",
    categoriaId: 2,
    precio: 3.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050583/HELADOS/Cupcake_de_fresa_gwpixs.jpg",
  },
  {
    nombre: "Cupcake de limón",
    categoriaId: 3,
    precio: 2.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050612/HELADOS/Cupcake_de_lim%C3%B3n_jjhw7j.jpg",
  },
  {
    nombre: "Cupcake de mango",
    categoriaId: 4,
    precio: 3.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050642/HELADOS/Cupcake_de_mango_k9p8d5.jpg",
  },
  {
    nombre: "Cupcake de chocolate",
    categoriaId: 5,
    precio: 4.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050676/HELADOS/Cupcake_de_chocolate_rnuxvr.jpg",
  },
  {
    nombre: "Barra de cereal de plátano",
    categoriaId: 6,
    precio: 1.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050715/HELADOS/Barra_de_cereal_de_pl%C3%A1tano_g0u51k.jpg",
  },
  {
    nombre: "Smoothie de vainilla",
    categoriaId: 1,
    precio: 4.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050750/HELADOS/Smoothie_de_vainilla_bvwwip.jpg",
  },
  {
    nombre: "Smoothie de fresa",
    categoriaId: 2,
    precio: 5.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050774/HELADOS/Smoothie_de_fresa_wtcumh.jpg",
  },
  {
    nombre: "Smoothie de limón",
    categoriaId: 3,
    precio: 4.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050824/HELADOS/Smoothie_de_lim%C3%B3n_ypzsff.jpg",
  },
  {
    nombre: "Galletas de vainillita",
    categoriaId: 1,
    precio: 4.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050884/HELADOS/Galletas_de_vainillita_llpc64.jpg",
  },
  {
    nombre: "Galletas de fresa",
    categoriaId: 2,
    precio: 5.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050946/HELADOS/Galletas_de_fresa_g9ciox.jpg",
  },
  {
    nombre: "Galletas de limón",
    categoriaId: 3,
    precio: 4.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680050989/HELADOS/Galletas_de_lim%C3%B3n_rilnei.jpg",
  },
  {
    nombre: "Galletas de mango",
    categoriaId: 4,
    precio: 6.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051061/HELADOS/Galletas_de_mango_xropje.jpg",
  },
  {
    nombre: "Galletas de chocolate",
    categoriaId: 5,
    precio: 7.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051186/HELADOS/Galletas_de_chocolate_x8c66u.jpg",
  },
  {
    nombre: "Helado de plátanitos",
    categoriaId: 6,
    precio: 3.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051450/HELADOS/Helado_de_pl%C3%A1tanitos_iavdqr.jpg",
  },
  {
    nombre: "Brownie de vainilla",
    categoriaId: 1,
    precio: 6.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051485/HELADOS/Brownie_de_vainilla_scjezn.jpg",
  },
  {
    nombre: "Brownie de fresa",
    categoriaId: 2,
    precio: 7.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051519/HELADOS/Brownie_de_fresa_jqvwty.jpg",
  },
  {
    nombre: "Brownie de limón",
    categoriaId: 3,
    precio: 6.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051556/HELADOS/Brownie_de_lim%C3%B3n_ulahab.jpg",
  },
  {
    nombre: "Brownie de mango",
    categoriaId: 4,
    precio: 8.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051583/HELADOS/Brownie_de_mango_ltvr9e.jpg",
  },
  {
    nombre: "Brownie de chocolate",
    categoriaId: 5,
    precio: 9.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051624/HELADOS/Brownie_de_chocolate_ztej6k.jpg",
  },
  {
    nombre: "Crema de vainilla",
    categoriaId: 1,
    precio: 3.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051660/HELADOS/Crema_de_vainilla_nizteq.jpg",
  },
  {
    nombre: "Crema de fresa",
    categoriaId: 2,
    precio: 4.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051755/HELADOS/Crema_de_fresa_iiv6tr.jpg",
  },
  {
    nombre: "Crema de limón",
    categoriaId: 3,
    precio: 3.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051806/HELADOS/Crema_de_lim%C3%B3n_pzvrqx.jpg",
  },
  {
    nombre: "Crema de mango",
    categoriaId: 4,
    precio: 5.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051858/HELADOS/Crema_de_mango_h8xpvq.jpg",
  },
  {
    nombre: "Crema de chocolate",
    categoriaId: 5,
    precio: 6.25,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051893/HELADOS/Crema_de_chocolate_bk0c4f.jpg",
  },
  {
    nombre: "Batido de plátanitos",
    categoriaId: 6,
    precio: 4.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051947/HELADOS/Batido_de_pl%C3%A1tanitos_klqhhm.jpg",
  },
  {
    nombre: "Té helado de vainilla",
    categoriaId: 1,
    precio: 2.5,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680051986/HELADOS/T%C3%A9_helado_de_vainilla_dz2csw.jpg",
  },
  {
    nombre: "Té helado de fresa",
    categoriaId: 2,
    precio: 3.0,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680052025/HELADOS/T%C3%A9_helado_de_fresa_eup4au.jpg",
  },
  {
    nombre: "Té helado de limón",
    categoriaId: 3,
    precio: 2.75,
    imagen:
      "https://res.cloudinary.com/dc30fvhz5/image/upload/v1680052068/HELADOS/T%C3%A9_helado_de_lim%C3%B3n_qxe6tc.jpg",
  },
];

export {productos};
