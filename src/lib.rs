use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::{Engine as _, engine::general_purpose};
use image::load_from_memory;
use image::ImageOutputFormat::Png;

#[wasm_bindgen]
pub fn grayscale(encode_file: &str) -> String {
    let bytes = general_purpose::STANDARD
    .decode(encode_file).unwrap();
    let mut img = load_from_memory(&bytes).unwrap();
    img = img.grayscale();
    let mut buffer = Vec::new();
    img.write_to(&mut buffer, Png).unwrap();
    let mut base64 = general_purpose::STANDARD.encode(buffer);
    base64 = format!("data:image/png; base64,{}", base64);
    log(&"Effect Applied".into());
    return base64;
}