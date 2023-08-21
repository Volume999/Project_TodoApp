package main

import "github.com/gofiber/fiber/v2"

/*
TODO:
 1. install MongoDB
 2. Create Models, Database, and Routes
 3. Add task button
 4. Check task button
 5. Delete task button
*/
func main() {
	app := fiber.New()

	app.Static("/", "./frontend/")

	err := app.Listen(":3000")
	if err != nil {
		panic(err)
	}
}
