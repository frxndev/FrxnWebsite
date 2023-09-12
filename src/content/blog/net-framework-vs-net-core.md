---
title: .NET Framework vs .NET Core ¿Cuál es la diferencia?
date: 2023-03-15T21:40:13.587Z
tags:
  - csharp
  - .net-framework
  - .net-core
category: programación
---

En el mundo de la programación, .NET Framework y .NET Core son dos de las plataformas más utilizadas para el desarrollo de aplicaciones web y de escritorio. Si bien ambas son parte de la familia de productos .NET de Microsoft, hay diferencias clave entre ellas. En este artículo, exploraremos algunas de las principales diferencias entre .NET Framework y .NET Core, y cómo afectan a tecnologías como Entity Framework, ASP .NET, WEB API, entre otras.

.NET Framework vs .NET Core
La primera gran diferencia entre .NET Framework y .NET Core es la forma en que se construyen y ejecutan las aplicaciones. .NET Framework es una plataforma para Windows que solo se puede ejecutar en un sistema operativo Windows. Por otro lado, .NET Core es una plataforma que se puede ejecutar en sistemas operativos Windows, Linux y macOS, es decir, multiplataforma. Esto significa que .NET Core es una plataforma más versátil y flexible que .NET Framework, lo que la hace más adecuada para el desarrollo de aplicaciones modernas.

Entity Framework es un framework ORM (Object Relational Mapping) que permite a los desarrolladores interactuar con bases de datos relacionales utilizando objetos en lugar de SQL directamente. Es una herramienta muy popular para el acceso a bases de datos en .NET. Microsoft ofrece dos ORM´s diferentes que no son compatibles entre sí: Entity Framework y Entity Framework Core.

Entity Framework se ejecuta en la parte superior de ADO.NET, que es la biblioteca de acceso a datos nativa de .NET Framework.

Entity Framework Core al igual que EF se ejecuta en la parte superior de ADO.NET, Entity Framework Core es una versión simplificada y mejorada de Entity Framework que se ha optimizado para .NET Core. También es importante destacar que Entity Framework Core tiene soporte para una amplia gama de proveedores de bases de datos, lo que lo hace aún más versátil que su contraparte de Entity Framework.

ASP .NET es un framework para construir aplicaciones web desarrollado por Microsoft. Microsoft ofrece dos frameworks diferentes que no son compatibles entre sí: ASP .NET y ASP .NET Core.

En .NET Framework, ASP .NET se ejecuta en la parte superior de la infraestructura de Windows. ASP .NET Core se ejecuta en una plataforma independiente, lo que lo hace más fácil de implementar y escalar en múltiples plataformas. Además, ASP .NET Core tiene una arquitectura más modular que ASP .NET, lo que significa que puede elegir usar solo los componentes que necesita para su aplicación.

Web API es un framework para construir servicios web RESTful desarrollado por Microsoft. Al igual que ASP .NET, Web API se ejecuta en .NET Framework o .NET Core. Sin embargo, debido a las diferencias en la forma en que se construyen y ejecutan las aplicaciones, hay algunas diferencias notables en la forma en que se construyen los servicios web. Por ejemplo, en .NET Framework, los servicios web de Web API se implementan como extensiones de ASP .NET. En .NET Core, los servicios web de Web API se implementan como aplicaciones independientes.

## Conclusión

En resumen, .NET Framework y .NET Core son dos plataformas de desarrollo de aplicaciones muy diferentes, cada una con sus fortalezas y debilidades. Si bien .NET Framework ha sido durante mucho tiempo la plataforma de elección para el desarrollo de aplicaciones Windows, .NET Core es una plataforma más moderna y versátil que se adapta mejor a las necesidades de las aplicaciones modernas. En general, si está comenzando un nuevo proyecto de desarrollo de aplicaciones, es probable que desee considerar el uso de .NET Core, ya que ofrece una mayor flexibilidad y escalabilidad en comparación con .NET Framework. Además, Entity Framework Core y ASP .NET Core son versiones optimizadas de sus contrapartes de Framework, lo que significa que ofrecen una mejor experiencia de desarrollo y un mayor rendimiento.

Sin embargo, si ya tiene una aplicación existente en .NET Framework, no tiene que cambiar necesariamente a .NET Core. En lugar de eso, puede continuar utilizando .NET Framework y aprovechar al máximo sus capacidades existentes. Además, Microsoft ha anunciado que continuará brindando soporte a .NET Framework a mediano plazo, lo que significa que aún se puede usar de manera segura y confiable para el desarrollo de aplicaciones.


En última instancia, la elección entre .NET Framework y .NET Core dependerá de las necesidades específicas de su proyecto de desarrollo de aplicaciones. Si necesita una plataforma más versátil y escalable que se adapte bien a las aplicaciones modernas, .NET Core puede ser la mejor opción. Si ya tiene una aplicación existente en .NET Framework y está satisfecho con su rendimiento, no hay necesidad de cambiar. En cualquier caso, tanto .NET Framework como .NET Core ofrecen una amplia gama de tecnologías de desarrollo de aplicaciones, como Entity Framework, ASP .NET y Web API, que pueden ayudar a los desarrolladores a crear aplicaciones seguras, escalables y de alto rendimiento.
