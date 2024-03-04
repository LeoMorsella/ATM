export interface Tarjeta {

    id_tarjeta?:number,
    titular:string,
    num_tarjeta:number,
    pin:number,
    disponible:number,
    fecha_vencimiento:Date
}