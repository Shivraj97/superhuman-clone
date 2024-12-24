import { db } from "./server/db";

// Make this file a module and wrap the code in an async function
export const createTestUser = async () => {
  try {
    await db.user.create({
      data: {
        emailAddress: "test@gmail.com",
        firstName: "Test",
        lastName: "User",
        imageUrl:
          "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error creating test user:", error.message);
    } else {
      console.error("Error creating test user:", String(error));
    }
    throw error;
  }
};

// Execute the function if needed
void createTestUser();
