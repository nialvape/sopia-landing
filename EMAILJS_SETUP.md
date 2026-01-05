# Configuración de EmailJS para el Formulario de Demo

## 📧 Paso 1: Crear Cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" (Registrarse)
3. Crea una cuenta gratuita (permite 200 emails/mes)

## 🔧 Paso 2: Conectar tu Email

1. Una vez dentro del dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta `hola@sopia.app`
5. Copia el **Service ID** que te dan (ejemplo: `service_abc123`)

## 📝 Paso 3: Crear Template de Email

1. Ve a **"Email Templates"** en el menú lateral
2. Haz clic en **"Create New Template"**
3. Configura el template así:

### Configuración del Template:

**Subject (Asunto):**
```
Nueva Solicitud de Demo - {{from_name}} de {{company}}
```

**Content (Contenido):**
```
Has recibido una nueva solicitud de demo de Sopia:

Nombre: {{from_name}}
Email: {{from_email}}
Empresa: {{company}}
Teléfono: {{phone}}

Mensaje:
{{message}}

---
Este email fue enviado automáticamente desde el formulario de la landing de Sopia.
```

**To Email:**
```
hola@sopia.app
```

4. Guarda el template y copia el **Template ID** (ejemplo: `template_xyz789`)

## 🔑 Paso 4: Obtener Public Key

1. Ve a **"Account"** → **"General"**
2. Busca la sección **"Public Key"** o **"User ID"**
3. Copia tu **Public Key** (ejemplo: `user_def456`)

## ⚙️ Paso 5: Configurar Variables de Entorno

1. En la carpeta del proyecto `sopia-landing`, crea un archivo `.env`:

```bash
# En Windows PowerShell:
Copy-Item .env.example .env

# O simplemente crea el archivo .env manualmente
```

2. Edita el archivo `.env` y reemplaza los valores:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_def456
```

**⚠️ IMPORTANTE:** Reemplaza `service_abc123`, `template_xyz789` y `user_def456` con tus valores reales de EmailJS.

## 🚀 Paso 6: Reiniciar el Servidor

Después de configurar las variables de entorno, reinicia el servidor de desarrollo:

```bash
# Detén el servidor actual (Ctrl+C)
# Luego vuelve a iniciarlo:
npm run dev
```

## ✅ Paso 7: Probar el Formulario

1. Abre la landing en el navegador
2. Haz clic en "Solicitar Demo"
3. Completa el formulario
4. Envía y verifica que llegue el email a `hola@sopia.app`

## 🔍 Troubleshooting

### El email no llega:
- Verifica que las 3 variables de entorno estén correctamente configuradas
- Revisa la consola del navegador para ver errores
- Verifica en EmailJS Dashboard → "Logs" si el email se envió
- Revisa la carpeta de spam de `hola@sopia.app`

### Error "Service ID not found":
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo en EmailJS

### Error de CORS:
- EmailJS maneja CORS automáticamente, pero asegúrate de usar la Public Key correcta

## 💰 Límites del Plan Gratuito

- **200 emails/mes** gratis
- Si necesitas más, puedes upgradear a un plan pago en EmailJS

## 🔐 Seguridad

- El Public Key es seguro exponerlo en el frontend
- EmailJS valida los requests desde tu dominio
- Puedes configurar restricciones de dominio en EmailJS Dashboard

---

¿Necesitas ayuda? Escribe a soporte de EmailJS o revisa su documentación: https://www.emailjs.com/docs/
