def currency_converter():
    exchange_rate = 82.5  # 1 USD = 82.5 INR (example rate)
    print("Welcome to the Currency Converter!")
    print(f"Current exchange rate: 1 USD = {exchange_rate} INR")

    while True:
        print("\nChoose an option:")
        print("1. Convert INR to USD")
        print("2. Convert USD to INR")
        print("3. Exit")
        
        try:
            choice = int(input("Enter your choice (1/2/3): "))
        except ValueError:
            print("Invalid input. Please enter a valid number.")
            continue

        if choice == 3:
            print("Exiting the converter. Thank you!")
            break

        if choice not in [1, 2]:
            print("Invalid choice. Please choose 1, 2, or 3.")
            continue

        try:
            amount = float(input("Enter the amount: "))
        except ValueError:
            print("Invalid input. Please enter a valid number.")
            continue

        if choice == 1:
            converted_amount = amount / exchange_rate
            print(f"{amount} INR is equal to {converted_amount:.2f} USD.")
        elif choice == 2:
            converted_amount = amount * exchange_rate
            print(f"{amount} USD is equal to {converted_amount:.2f} INR.")

currency_converter()




































































    
































def currency_converter():
    exchange_rate = 82.5  # 1 USD = 82.5 INR (example rate)
    print("Welcome to the Currency Converter!")
    print(f"Current exchange rate: 1 USD = {exchange_rate} INR")

    while True:
        print("\nChoose an option:")
        print("1. Convert INR to USD")
        print("2. Convert USD to INR")
        print("3. Exit")
        
        try:
            choice = int(input("Enter your choice (1/2/3): "))
        except ValueError:
            print("Invalid input. Please enter a valid number.")
            continue

        if choice == 3:
            print("Exiting the converter. Thank you!")
            break

        if choice not in [1, 2]:
            print("Invalid choice. Please choose 1, 2, or 3.")
            continue

        try:
            amount = float(input("Enter the amount: "))
        except ValueError:
            print("Invalid input. Please enter a valid number.")
            continue

        if choice == 1:
            converted_amount = amount / exchange_rate
            print(f"{amount} INR is equal to {converted_amount:.2f} USD.")
        elif choice == 2:
            converted_amount = amount * exchange_rate
            print(f"{amount} USD is equal to {converted_amount:.2f} INR.")

currency_converter()





