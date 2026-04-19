import math,time
for angle in range(0,360,45):
    x=round(math.cos(math.radians(angle))*10,2)
    y=round(math.sin(math.radians(angle))*10,2)
    print(f"Ping at {angle}° => ({x},{y})")
    time.sleep(0.1)
print('Radar sweep complete')
