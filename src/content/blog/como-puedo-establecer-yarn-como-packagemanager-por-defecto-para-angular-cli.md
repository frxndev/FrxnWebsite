---
title: ¿Cómo puedo establecer pnpm como packageManager por defecto para Angular CLI?
date: 2023-09-18T21:40:13.587Z
tags:
  - angular
  - npm
  - pnpm
category: programación
---

## Con proyecto existente

Para actualizar el gestor de paquetes de tu proyecto angular a pnpm, debes ejecutar el siguiente comando:

```bash	
ng config --global cli.packageManager pnpm
```

<sub>Debes ejecutar dentro de un proyecto angular ya creado, si lo ejecutas fuera de un proyecto angular te dará un error.</sub>

Si necesitas volver pnpm a npm entonces ejecuta el siguiente comando:

```bash	
ng config --global cli.packageManager npm
```

## Con proyecto nuevo (Angular 12+)

Para crear un nuevo proyecto angular con pnpm como gestor de paquetes, debes ejecutar el siguiente comando:

```bash
ng new my-app --package-manager pnpm
```
