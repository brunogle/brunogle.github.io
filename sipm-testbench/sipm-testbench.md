

## Descripción del Proyecto

Se realizó el diseño y construcción de un banco de pruebas de fotomultiplicadores de silicio (SiPM) que permite la caracterización del ruido en oscuridad (dark-count rate), el espectro single-photoelectron (SPE), el consumo de corriente del dispositivo y la ganancia. El sistema es portable, económico y tiene la capacidad de realizar la caracterización del SiPM a una distancia de 2m, permitiendo la realización de ensayos de tolerancia a radiación sin la exposición innecesaria del banco de pruebas.

Se diseñó y fabricó un módulo que se acopla directamente a la parte superior de una Red Pitaya STEMlab 125-14 [1], una computadora de placa única con un FPGA integrado y front-end analógico de alta velocidad con dos ADCs y dos DACs de 125 MSpS. El módulo desarrollado sirve para la alimentación del SiPM en un rango de 10 V a 80 V, posee capacidades de monitoreo de corriente de entre 1 nA y 100 μA y cuenta con un preamplificador de alta velocidad para el acondicionamiento de la señal previo a la digitalización por la Red Pitaya.


## Métodos e Instrumentos Utilizados

Para la adquisición de las señales de alta velocidad generadas por el SiPM se utilizó la computadora de placa Red Pitaya, esta posee un front-end analógico con dos entradas y dos salidas de alta velocidad (125 MSpS) conectadas a un FPGA Xilinx Zynq-7000 que permite el procesamiento de las señales en tiempo real y la comunicación con un procesador físico integrado ARM con capacidades de ejecutar un sistema operativo basado en Linux.

El diseño del módulo de pruebas de SiPM fue realizado en KiCAD[2] y fabricado en JLCPCB [3]. El fabricante realizó el ensamblado de los componentes de montaje superficial (SMD), mientras que los componentes de agujeros pasantes (THT) fueron adquiridos de DigiKey [4] y montados manualmente.

Como sistema operativo base para la Red Pitaya se optó por utilizar una versión modificada de Debian Linux desarrollada por Demin Pavel [5] que cuenta con los drivers y el device-tree necesarios para su funcionamiento.

El software de aplicación fue desarrollado en el lenguaje C, utilizando la misma Red Pitaya como plataforma para compilar los programas. El desarrollo se realizó a través de una conexión SSH con el editor de texto Visual Studio Code.

La implementación en la FPGA para el procesamiento de señales fue diseñada usando el entorno de desarrollo Vivado de AMD versión 2025.1 [6]. Se utilizó una combinación de código en Verilog, módulos provistos por el fabricante y las conexiones de alto nivel fueron realizadas en el entorno de diseño por bloques.

Para facilitar el desarrollo del sistema de procesamiento digital se usó un entorno de Python junto con librerías como SciPy, NumPy y Matplotlib para realizar pruebas del funcionamiento previo a su implementación en FPGA, en especial del sistema de detección de picos.

Para el procesamiento posterior de los datos se utilizó Python. El posprocesamiento incluye correcciones necesarias para la visualización correcta de los datos


