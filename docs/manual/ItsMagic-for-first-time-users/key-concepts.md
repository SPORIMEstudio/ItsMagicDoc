# Key concepts

There are some concepts you rely on from the moment you open the its magic Editor. Use this page to refresh your memory as you work through tutorials and your first projects.

# SpatialObject, components, and scenes
[SpatialObject ](../manual-md-files/tutorial-1.md) represent everything in your game, including characters, props, and scenery. In the its magic Editor, all objects in a scene are SpatialObject. In contrast, project assets are source files that you add to scenes. For example, Java scripts
, textures, materials, 3D model files, and prefabs.

SpatialObject exist in 2D or 3D environments called [Scene ](../manual-md-files/tutorial-1.md) 
. You can think of a scene as a game level, but it might also represent a menu, the credits at the end of the game, or a cutscene.

The behavior of SpatialObject is defined by blocks of functionality called components. You can attach multiple components to SpatialObject. The following components are fundamental for 3D games:

|Component	|Impact on a SpatialObject
|----------|-----------------------------|
|**[Transform ](#)**|Determines the Position, Rotation, and Scale of each SpatialObject in the scene. Every SpatialObject has a Transform component.|
|**[Model renderer ](#)**|Applies textures and handles how the 3D SpatialObject looks under lighting examples.|
|**[Cameras ](#)**	|Define SpatialObject that capture and display the world to the player.|
|**[Physics ](#)**	|Allow SpatialObject to interact with the Physics system, including gravity and collisions.|
|**[Colliders ](#)**|Defines the shape of a 3D SpatialObject for the purpose of physical collisions, which can be different from the 3D mesh’s visible shape.|

# Scripting
Use scripts to create complex game behavior, such as:

Trigger game events, such as move the user to a win or lose scene in response to changes in the user’s game stats.
Change component properties over time. For example, change the visibility of a object, shrink and enlarge an object, or collapse a wall.
Respond to user input to move their character, interact with objects, and select menu options.
To add a script to a SpatialObject, add the Script using 
**`+`** button in **`properties panel`** and add your scripts from list.

its Magic supports Java, python, Lua, Thermal Flow(visual Scripting) and Node script .

 For details on how to use scripts in its magic, refer to [Scripting Overview](#).

Coming soon  more . . . .