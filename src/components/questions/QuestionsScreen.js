import React from "react";

export const QuestionsScreen = () => {
  return (
    <div>
      <h1 className="container d-flex justify-content-center">Questions</h1>
      <div className="container mt-5">
        <h3>¿Qué es una prueba unitaria?</h3>
        <p>
          {" "}
          Las pruebas unitarias son una forma de comprobar que un fragmento de
          código funciona correctamente. Es un procedimiento más de los que se
          llevan a cabo dentro de una metodología ágil de trabajo,Las pruebas
          unitarias consisten en aislar una parte del código y comprobar que
          funciona a la perfección. Son pequeños tests que validan el
          comportamiento de un objeto y la lógica.
        </p>
        <h5>Que nos permite ?</h5>
        <p>
          • Las pruebas unitarias demuestran que la lógica del código está en
          buen estado y que funcionará en todos los casos.
        </p>
        <p>
          • Aumentan la legibilidad del código y ayudan a los desarrolladores a
          entender el código base, lo que facilita hacer cambios más
          rápidamente.
        </p>
        <p>
          • Los test unitarios bien realizados sirven como documentación del
          proyecto.
        </p>
        <p>
          • Se realizan en pocos segundos, por lo que podrás realizar cientos de
          ellas en muy poco tiempo.
        </p>
        <p>
          • permiten al desarrollador refactorizar el código más adelante y
          tener la garantía de que el módulo sigue funcionando correctamente.
          Para ello se escriben casos de prueba para todas las funciones y
          métodos, para que cada vez que un cambio provoque un error, sea
          posible identificarlo y repararlo rápidamente.
        </p>
        <p>
          • La calidad final del código mejorará ya que, al estar realizando
          pruebas de manera continua, al finalizar el código será limpio y de
          calidad.
        </p>
        <h3>¿Cuales son las ventajas de la programación funcional?</h3>
        <p>
          Debido a que las funciones puras no cambian ningún estado y dependen
          completamente de la entrada, son fáciles de entender. El valor de
          retorno dado por tales funciones es el mismo que el resultado
          producido por ellas. Los argumentos y el tipo de retorno de las
          funciones puras se dan por su firma de función. Debido a la naturaleza
          de las funciones puras para evitar el cambio de variables o cualquier
          dato externo, la implementación de la concurrencia se vuelve eficaz La
          programación funcional admite el concepto de evaluación diferida, lo
          que significa que el valor se evalúa y almacena solo cuando es
          necesario. Las funciones puras toman argumentos una vez y producen una
          salida inmutable. Por lo tanto, no producen ningún resultado oculto.
          Utilizan valores inmutables, lo que facilita la depuración y las
          pruebas. El estilo de programación funcional trata las funciones como
          valores y pasa las mismas a otras funciones como parámetros. Mejora la
          comprensión y la legibilidad del código.
        </p>
        <h3>
          ¿Cuales son las ventajas de utilizar arquitecturas sin servidor?
        </h3>
        <p>
          • Son mucho más flexibles a la hora de crear esquemas de información,
          lo que las convierte en una solución ideal para el almacenamiento y
          gestión de datos no estructurados o semiestructurados.
        </p>
        <p>
          • Ofrecen una mayor escalabilidad. Pueden soportar mayores volúmenes
          de datos y añadir mayor capacidad añadiendo nuevos módulos de
          software, sin necesidad de añadir nuevos servidores.
        </p>
        <p>
          • Garantizan un alto rendimiento, ya que están diseñadas para trabajar
          con modelos de datos concretos y patrones de acceso específicos.
        </p>
        <p>
          • Son muy funcionales, ya que cuentan con API exclusivas y
          proporcionan modelos de datos para trabajar con cada tipo de datos
          presentes en la base.
        </p>

        <h3>¿Que ventajas tiene el uso de una base de datos no relacional?</h3>
        <p>
          • Aplicaciones de big data: grandes volúmenes son manejados fácilmente
          .
        </p>
        <p>
          • Administración de la base de datos: Requieren menos administración
          práctica, cuenta con capacidades de distribución de datos y reparación
          automática, modelos de datos simplificados y menos requisitos de
          ajuste y administración.
        </p>
        <p>
          • Versatilidad: Las posibilidades de crecimiento en el volumen de
          datos o la posibilidad de incluir cambios sobre la forma en la que
          ingresan los datos sin necesidad de alterar la estructura, permite
          adaptarse de forma rápida a un entorno de alto dinamismo.
        </p>
        <p>
          • Crecimiento Horizontal: Son altamente escalables, si se requiere
          instalar mayor cantidad de nodos para ampliar la capacidad, se puede
          hacer sin problemas. Esto no interrumpe la usabilidad o consultas
          dentro de la base de datos.
        </p>
        <p>
          • Economía: No se necesitan servidores con gran cantidad de recursos
          para operar. La adaptabilidad y flexibilidad permiten empezar con
          bajos niveles de inversión en equipos e ir ampliando la capacidad a
          medida de las necesidades.
        </p>
        <h3>Pros y Contras del uso de GitFlow vs Trunk.</h3>
        <h5>Git-flow</h5>
        <p>•	Lo más lejos posible de la rama principal.</p>
        <p>•	Las nuevas funciones comenzaron desde la rama de desarrollo</p>
        <p>•	Nueva rama de versión derivada de la rama de desarrollo, después de la implementación de la rama de versión estabilizada.</p>
        <p>•	Solo revisiones derivadas de la rama principal
</p>
<h5>Trunk</h5>
<p>•	Lo más cerca posible de la rama principal.</p>
<p>•	Las ramas de características de corta duración comenzaron desde la rama principal.</p>
<p>•	Rama principal siempre en estado lista para ser implementada en producción.</p>
<p>•	Las revisiones comienzan desde la rama principal o de lanzamiento, deben seleccionarse de nuevo a la principal.</p>

      </div>
    </div>
  );
};
