---
sidebar_position: 3
title: 2D and 3D Projects
---

# 2D and 3D Projects in Its Magic

The Its Magic game engine is highly versatile and capable of creating both **2D and 3D games**. However, how you approach development differs significantly, primarily in how you configure the camera and the scene.

## The Core Difference

| Project Type | Focus | Primary Asset Type |
| :--- | :--- | :--- |
| **3D Project** | Depth, volume, realistic lighting, and perspective. | Meshes, complex materials. |
| **2D Project** | Flat plane, sprite-based graphics, and screen-space UI. | Sprites, flat textures. |

---

## Creating a 2D Game

Unlike some other engines, Its Magic currently **does not provide a dedicated 2D Editor view**. This means that to achieve a true 2D look and feel, you must manually configure the engine settings.

### 1. Setting the Camera Projection

The single most important step for any 2D project in Its Magic is adjusting the main camera's projection mode.

* Select your **Main Camera** object in the Hierarchy.
* In the Inspector panel, locate the Camera component.
* Change the **Projection** setting from **`Perspective`** (default for 3D) to **`Orthographic`**.



### 2. Positioning the Camera

After changing the projection, position the camera so that its view plane aligns perfectly with your 2D scene assets (sprites).

* Typically, set the **Rotation** to `(0, 0, 0)`.
* Ensure the camera is looking straight onto the 2D plane (e.g., positioned at `(0, 0, -10)` if your scene is on the XY plane).

---

## Creating a 3D Game

For a standard 3D game, you can simply use the default project template settings, which include:

* **Perspective** camera projection, which creates realistic depth and scale.
* Standard lighting and rendering features optimized for three-dimensional space.